#!/bin/zsh

# Directory containing the posts
POSTS_DIR="content/posts"

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

