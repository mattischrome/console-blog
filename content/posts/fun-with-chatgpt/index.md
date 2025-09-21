---
category: Software
date: "2025-01-12"
tableOfContents: true
tags: ["Software", "Twenty Five", "Blogging", "Drafts", "Content Management", "Meta"]
title: Fun With Chat-GPT
---
I asked:

<!--more-->
> For my blog I have a folder called posts. In that folder are more folders that are named for the slug of each post, as per the conventions of the Hugo static site generator. Those folders each contain a markdown file named index.md, each of which has a YAML header. Draft posts have a YAML key called draft which has the value true. Please can you write me a shell script that I can run from the directory above posts that tells me which folders in the posts folder contain draft posts?

I got:

```bash
#!/bin/bash

# Directory containing the posts
POSTS_DIR="posts"

# Check if the posts directory exists
if [[ ! -d "$POSTS_DIR" ]]; then
  echo "Error: Directory '$POSTS_DIR' does not exist."
  exit 1
fi

# Find and print folders containing draft posts
echo "Folders with draft posts:"
find "$POSTS_DIR" -type f -name "index.md" | while read -r file; do
  if grep -q "^draft: true" "$file"; then
    folder=$(dirname "$file")
    echo "$folder"
  fi
done
```

And these instructions:

1. Save this script to a file, e.g., find_drafts.sh.
2. Make it executable with: `chmod +x find_drafts.sh`
3. Run the script from the directory above posts: `./find_drafts.sh`

So that did everything right except for the folder location, which was trivial for me to fix. So that's useful and now I can look up the drafts I am working on despite the unfriendliness of Hugo's directory structure. Could I have thought all that up by myself? Of course, and that's why I am posting it here as a reminder to myself next time!