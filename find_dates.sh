#!/bin/bash

# Directory containing the posts
POSTS_DIR="content/posts"
OUTPUT_FILE="dates_categories_4.csv"

# Check if the posts directory exists
if [[ ! -d "$POSTS_DIR" ]]; then
  echo "Error: Directory '$POSTS_DIR' does not exist."
  exit 1
fi

# Write the CSV header
echo "date,category,word_count" > "$OUTPUT_FILE"

# Find all index.md files and process each file
find "$POSTS_DIR" -type f -name "index.md" | while read -r file; do
  # Extract the date value (checking for both "date" and "pubDate")
  date_value=$(grep -m 1 -E "^(date|pubDate):" "$file" | awk '{print $2}')

  # Remove any quotes from the date value
  date_value=$(echo "$date_value" | tr -d "\"'")

  # If the date is in ISO format (YYYY-MM-DDTHH:MM:SSZ), extract only the YYYY-MM-DD part
  date_value=$(echo "$date_value" | sed -E 's/([0-9]{4}-[0-9]{2}-[0-9]{2})T.*/\1/')

  # Extract the category/categories value (handles both singular and list formats)
  category_value=$(grep -m 1 "^category:" "$file" | awk '{print $2}')
  
  # If "category:" is not found, try "categories:"
  if [[ -z "$category_value" ]]; then
    category_value=$(grep -A 5 "^categories:" "$file" | awk '/^-/{print $2}' | paste -sd ";" -)
  fi

  # Remove any quotes from the category value
  category_value=$(echo "$category_value" | tr -d "\"'")

  # Calculate the word count after the YAML header (after second "---")
  word_count=$(awk 'BEGIN {count=0} /^---$/ {found+=1; next} found==2 {count+=NF} END {print count}' "$file")

  # If both date and category exist, append to the CSV file
  if [[ -n "$date_value" && -n "$category_value" ]]; then
    echo "$date_value,$category_value,$word_count" >> "$OUTPUT_FILE"
  fi
done

echo "Extraction complete. Data saved in $OUTPUT_FILE."
