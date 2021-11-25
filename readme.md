# TRenderer

A software that converts markdown to html in a whiteboard-like way.

Made specifically for the v2whiteboards project.

## Instructions

The program will scan the folder/file as specified by the arguments and convert all .md files to .html files.

### Syntax
```
npm run start -- ...[path]
```

### Example

Convert all .md files in the folder data/ to .html files
```
npm run start -- data 
```

Convert all .md files in the folders data/ and example/ to .html files
```
npm run start -- data example 
```
