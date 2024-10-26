
#!/bin/bash

# Set content directory
CONTENT_DIR="./content/posts"

# Function to create slug from title
generate_slug() {
    echo "$1" | tr '[:upper:]' '[:lower:]' | sed 's/ /-/g' | tr -cd '[:alnum:]-'
}

# Function to check if slug exists
slug_exists() {
    if [ -d "$CONTENT_DIR/$1" ]; then
        return 0
    else
        return 1
    fi
}

# Ask for title
read -p "Enter the title of the new post: " title

# Generate slug
slug=$(generate_slug "$title")

# Check if slug already exists
while slug_exists "$slug"; do
    read -p "The slug '$slug' already exists. Please enter a new slug: " slug
    slug=$(generate_slug "$slug")
done

# Confirm slug with user
read -p "The generated slug is '$slug'. Is this okay? (y/n): " slug_ok
if [ "$slug_ok" != "y" ]; then
    read -p "Enter a new slug: " slug
    while slug_exists "$slug"; do
        read -p "The slug '$slug' already exists. Please enter a new slug: " slug
    done
fi

# Ask for category
read -p "Enter the category for the post: " category

# Ask for tags
read -p "Enter the tags for the post (comma separated): " tags

# Get current date
date=$(date +"%Y-%m-%d")

# Ask for description
read -p "Enter the description for the post: " description

# Create the post directory
mkdir -p "$CONTENT_DIR/$slug"

# Create the index.md file
cat <<EOL > "$CONTENT_DIR/$slug/index.md"
---
title: "$title"
category: "$category"
tags: [$tags]
date: "$date"
description: "$description"
draft: true
---
EOL

# Open the file in a text editor (default: nvim)
nvim "$CONTENT_DIR/$slug/index.md"
