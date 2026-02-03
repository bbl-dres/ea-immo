"""
Fix image paths with parentheses by URL-encoding them
"""

import re
from pathlib import Path

TARGET_DIR = r"c:\Users\DavidRasner\Documents\GitHub\ea-immo"


def fix_image_paths(content):
    """Fix image paths that contain parentheses"""

    # Function to encode parentheses in a path
    def encode_path(match):
        full_match = match.group(0)
        alt = match.group(1)
        path = match.group(2)

        # URL-encode parentheses in the path
        fixed_path = path.replace('(', '%28').replace(')', '%29')

        return f'![{alt}]({fixed_path})'

    # Find all image references and fix paths with parentheses
    content = re.sub(
        r'!\[(.*?)\]\(([^)]*\([^)]*\)[^)]*)\)',
        encode_path,
        content
    )

    # Also remove Confluence API references that weren't converted
    content = re.sub(
        r'!\[.*?\]\(rest/documentConversion/[^)]+\)',
        '',
        content
    )

    # Remove images/icons references that don't exist
    content = re.sub(
        r'!\[.*?\]\(images/icons/[^)]+\)',
        '',
        content
    )

    return content


def process_file(filepath):
    """Process a single markdown file"""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    original = content
    fixed = fix_image_paths(content)

    if original != fixed:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(fixed)
        print(f"  Fixed: {filepath.name}")
        return True
    return False


def main():
    print("=" * 70)
    print("Fixing image paths")
    print("=" * 70)

    target_path = Path(TARGET_DIR)
    fixed_count = 0

    for md_file in target_path.glob("*.md"):
        if process_file(md_file):
            fixed_count += 1

    print(f"\nFixed {fixed_count} files")
    print("=" * 70)


if __name__ == "__main__":
    main()
