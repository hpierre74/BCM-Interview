### React Test

The goal here is to create a React app that gets data from an API and displays it according to wireframe.

Wireframe can be found at  [wireframe.cc](https://wireframe.cc/uR5ws6).

The test data can be found in the [data.json](data.json) file.
A second file ([large-dataset.json](large-dataset.json)) can by used to test the application on a much bigger volume (even if this is not realistic).

## Constraints

 - Bootstrap 4.x must be used for the UI
 - The HTML table should display 10 rows and add pagination in order to browse the data.
 - The data in the HTML table must be sorted by time (ASC).
 - The times in the test dataset are in UTC, whereas the times in the UI are in UTC + 1.
 - There is no constraint for the plot library.
 - The test data must be served through a node.js api endpoint
