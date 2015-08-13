# About this repository

This repo is meant to be a collection of common licenses made easily accessable as javascript variables.

## Building

run ``` grunt build ```

** Using the include icon files: **
```bash
cp -r img {your_static_image_path}
grunt build --staticPath {your_static_image_path}
```

## Naming conventions

**Object Keys**
```({common abbreviation})({version})(_{minor version})*```

**File Names**
```({lower-case common abbreviation})-({version})(.{minor version})*```
