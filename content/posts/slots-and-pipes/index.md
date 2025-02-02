---
title: "Slots and Pipes"
category: "Programming"
tags: [R, Twenty Five, Programming, Functional Programming, Tidyverse]
date: "2025-02-02"
description: "Recent explorations in R have reminded me about two ways of thinking about how you refer to objects in the language. Slots are probably what you learn about first, and then pipes come along and change everything. But it's also good to not forget about slots once you know about pipes!"
---

Recent explorations in R have reminded me about two ways of thinking about how you refer to objects or (parts of objects) in the language.

Slots are probably what you learn about first, they use the `$` syntax. In R, the `$` operator is used to access specific elements or columns within a data structure, such as a list, data frame, or environment. You can think of it as an ersatz shorthand for the `tidyverse::select()` function, except that the latter is more powerful because you can do funky things like selecting multiple columns programmatically. By programmatically I mean "in some way that is not predetermined until you run your code", e.g. because you are selecting a subset of columns of your data frame that didn't exist until (long) before that step. Anyway, back to `$`, it's a way of selecting a particular column of a data frame or any smaller part of an object in R. In fact, one of my main use cases for `$` used to be for recalculating columns in a data frame when I wasn't confident about using `mutate()`: changing a column to a factor with `mutate()` gave me the heebie-jeebies for a long time. 

Here are some examples of how the `$` syntax is used in R:
1. Accessing columns in a data frame
2. Accessing elements in a list
3. Accessing variables in an environment (we'll come back to this later)
4. Accessing nested elements
5. Modifying data frame columns
6. Accessing columns in a Tidyverse tibble (this is part of the whole "tibbles are like data frames, only better" talk that I have to give to everyone eventually)
7. Accessing attributes of objects (again, we'll come back to this later)

So the `$` operator is a versatile tool in R for accessing and manipulating elements in data frames, lists, environments, and other objects. It is particularly useful for working with named elements or columns. And then pipes come along and change everything. At least they did for me. You that adage about how if you have a hammer everything looks like a nail? That's been with pipes in R for quite a long time.

For those uninitiated into pipe lore, it's an operator in R that you follow with a function that takes an argument that, unless otherwise explicitly denoted by the user, is the previous line of code. So something like:

```R
my_processed_tibble <- my_tibble %>%
    select(all_of(my_interesting_columns)) %>%
    mutate(interesting_column_sum = interesting_column_1 + interesting_column_2)
```

is actually really the incredibly long and fraught (at least horizontally):

```R
my_processed_tibble <- mutate(select(my_tibble,all_of(my_interesting_columns)), interesting_column_sum = interesting_column_1 + interesting_column_2) 
```

It was incredibly stressful to copy and paste that together from the version with the pipes. I'm not even sure it's right! The top version is a lot easier to debug, because you have the chain of functions applied in order to the original data frame. Note that I've used `%>%` which is the pipe function from the `magrittr` package. Version 4.1.0 of R introduced a 'native' pipe operator, it looks like this `|>`. I've continued using the OG `magrittr` pipe for two reasons. The first is simple muscle memory, and the second is that it lets you use `.` as a placeholder for previous values when using functions that are not pipe-friendly (e.g. for some reason they don't take the data frame as the first value).

By way of a short digression, one of my favourite uses of pipes is to assign them to functions so you can reuse chunks of code, e.g. 

```R
group_by_sex_and_summarise <- . %>%
    group_by(sex) %>%
    summarise(Value = sum(Value))
```

But it's also good to not forget about slots once you know about pipes. I don't think pipes are to blame for me forgetting about slots, per se, just that whole "everything's a nail" outlook I mentioned above. But sometimes, you want to pick things out easily. Over the years I've gotten myself into also sorts of `my_df %>% select(my_column) %>% as.vector()` contortions when a simple `my_df$my_column` would have sufficed.

Lately I've been wanting to create plots inside of loops and then access those plots later, for the purposes of putting them into a slide deck. This is what drove me back to slots. You can obviously cram your generated plots into a list, but let's say you want the titles of your plots to be the titles of your slides. Well, the simple to pull out the titles is to use the `$` operator. `my_ggplot$labels$title` will let you grab the title of the plot to use somewhere else. A simple thing, but something I had completely forgotten!