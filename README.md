# 29 Next App UI Framework

A UI Framework for creating apps with a seemless UX in the dashboard.

### How to Use

#### Include via CDN

The easiest way to use the files is via CDN, just copy from below and include in the head of your html file.

```
<link href="https://cdn.jsdelivr.net/gh/29next/app-ui-framework@0.0.2/dist/css/next-app-ui.min.css" rel="stylesheet" crossorigin="anonymous">
```

### Compile from Source

Compile with your asset pipeline by downloading the source files.

Source files for the UI are written in [Sass](https://sass-lang.com/) and can be found in the `src/scss` directory. You can copy and include the Sass files in your own or compile using the `src/scss/main.scss` file with any Sass compiler.


### Contributing

#### Run on Local

The docs site uses Jekyll for the static site generator with a built in docker image to make installing dependencies easier. Make sure you have Docker installed on your local machine before running the command below.

In a terminal, navigate to the directory with these files and run the following command.

```
make run
```

Your should now have the full docs site up and running on your local.

#### Create a Pull Request

Create a new branch with your changes and create a pull request to be reviewed before merging into the main branch.
