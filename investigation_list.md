# Blog Posts Investigation List

This document contains inconsistencies and potential issues found in the markdown files of the content/posts directory that need investigation and potential fixing.

## Summary
- **Total Posts**: 432
- **Draft Posts**: 11
- **Major Issues**: Internal links, date format inconsistencies, missing metadata

## 🔗 Internal Links Issues

### Potentially Broken Internal Links
The following posts contain internal links that may be broken due to slug changes or folder restructuring:

1. **understated-classics-27/index.md** (line 9, 51)
   - Links to `/posts/whatever-happened-to-that-hat/`
   - Links to `/posts/understated-classics-16/`

2. **the-human-in-the-loop/index.md** (line 24)
   - Links to `/posts/understated-classics-16/`

3. **south-america-trip-part-9/index.md** (lines 12-19)
   - Contains series navigation links to parts 1-8
   - Links: `/posts/south-america-trip-part-[1-8]`

4. **wilco-a-ghost-is-born-superdeluxe-edition/index.md** (line 16, 18)
   - Links to `/posts/understated-classics-27/`
   - Links to `/posts/robin-egg-blue/`

5. **a-collection-of-links-about-blogging/index.md** (line 22)
   - Links to `/posts/in-praise-of-playing-the-long-game/`

6. **dithering-around/index.md** (line 15)
   - Links to `/posts/in-praise-of-paris/`

7. **the-drought/index.md** (line 9)
   - Links to `/posts/j-g-ballard/`

8. **in-praise-of-pilates/index.md** (line 12)
   - Links to `/posts/fun-with-chatgpt/`
   - Links to `/posts/ambitions-revisited/`

**Action Required**: Verify all internal links are working correctly and update slugs if posts have been moved or renamed.

## 📅 Date Format Inconsistencies

### Posts with Unquoted Dates (YAML format issue)
These posts have dates without quotes, which may cause YAML parsing issues:

1. **maara-the-ancient-truth-vinyl/index.md** (line 3): `date: 2024-01-10`
2. **the-negativity-casket/index.md** (line 3): `date: 2024-01-12`
3. **fun-with-chatgpt/index.md** (line 3): `date: 2025-01-12`
4. **bob-mortimer-the-satsuma-complex/index.md** (line 3): `date: 2024-08-06`
5. **agents-of-chaos/index.md** (line 3): `date: 2024-01-08`
6. **unprimed/index.md** (line 4): `date: 2024-01-03`
7. **new-look-mattischrome/index.md** (line 3): `date: 2024-08-05`
8. **sympathy-for-the-screenager/index.md** (line 4): `date: 2024-07-19`
9. **sofa-so-good/index.md** (line 3): `date: 2024-01-14`
10. **git-instructions-for-future-matt/index.md** (line 3): `date: 2024-01-07`
11. **unindexed/index.md** (line 3): `date: 2024-01-11`

**Action Required**: Add quotes around all dates for consistent YAML formatting.

## 🏷️ Frontmatter Inconsistencies

### Posts with Empty/Missing Tags
1. **bill-drummond-45/index.md** (line 4): Has `tags:` but no values

### Category vs Tags Inconsistencies
Some posts mix different category naming conventions:
- "Understated Classics" vs "understated-classics" 
- "Album Digest" vs "album-digest"

**Action Required**: Standardize category naming conventions across all posts.

## 📝 Draft Posts Requiring Attention
The following posts are marked as drafts and may need review:

1. **sympathy-for-the-screenager/index.md**
2. **fun-with-chatgpt/index.md**
3. **ingrids-amazing-tulipierre/index.md**
4. **unprimed/index.md**
5. **yet-another-test-post/index.md**
6. **dive-in/index.md**
7. **fodmap-february/index.md**
8. **uc-40/index.md**
9. **a-test-post/index.md**
10. **balancing-bad-luck/index.md**
11. **50-ai-ideas/index.md**

**Action Required**: Review draft posts to determine if they should be published or deleted.

## 🖼️ Image Reference Issues

### Posts with Image References to Check
The following posts contain image references that should be verified:

1. **south-america-trip-part-9/index.md** - Contains image references
2. **understated-classics-4/index.md** - Contains image references
3. **2023-albums-10-wata-igarashi-agartha/index.md** - Contains image references
4. **2023-albums-09-fever-ray-radical-romantics/index.md** - Contains image references
5. **2023-albums-08-ebtg-fuse/index.md** - Contains image references

**Action Required**: Verify all image files exist and paths are correct.

## ⚡ Priority Actions

### High Priority
1. **Fix date format inconsistencies** - 11 posts need quoted dates
2. **Verify internal links** - Test all `/posts/` links for 404 errors
3. **Review draft posts** - 11 drafts need attention

### Medium Priority
1. **Standardize category naming**
2. **Fix empty tags field** in bill-drummond-45
3. **Verify image references**

### Low Priority
1. **Review content organization** - Check for any posts in wrong directories
2. **Check for duplicate slugs** - Ensure no conflicting post URLs

## 🔍 Recommended Tools

1. Use Hugo's built-in link checking: `hugo --printPathWarnings`
2. Run the existing scripts:
   - `./scripts/find_drafts.sh` for draft analysis
   - `./scripts/toc_script.py` for table of contents consistency
3. Consider implementing automated link checking in CI/CD pipeline

## Notes
- This analysis was performed on 432 total posts
- Most inconsistencies are minor formatting issues
- The blog has good overall structure and organization
- Regular maintenance with the existing scripts should prevent future inconsistencies