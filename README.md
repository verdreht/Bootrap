# Bootrap

Fresh looking styling library for Bootstrap. This extension includes better forms  and more.

## Installation

Download the library and place the .js and .css files in your working directory. Link the both files in your .html file. Make sure to place it after the bootstrap stylesheet and script.

```html
<head>
    <meta charset="UTF-8">
    <title>Example Website</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" 
      integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" 
      crossorigin="anonymous">

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js" 
      integrity="sha256-T0Vest3yCU7pafRw9r+settMBX6JkKN06dqBnpQ8d30=" 
      crossorigin="anonymous"></script>
    
    <link rel="stylesheet" href="bootrap.min.css">
    <script src="bootrap.min.js"></script>
</head>
```

## Usage

### Text input
```html
<!--Text input-->
<div class="input-wrapper">
    <label for="text"></label>
    <input type="text" class="form-control" name="text" id="text" placeholder="Text eingeben" required>
</div>
```

### Number input
```html
<!--Number input-->
<div class="input-wrapper">
    <label for="number"></label>
    <input type="number" class="form-control" name="text" id="number" placeholder="Nr." required>
</div>
```

### Other text inputs like e-mail
Just change the type attribute and bootsrap will recognize it.

### Checkboxes

```html
<!--Checkbox input-->
<div class="input-wrapper">
    <label class="checkbox-wrapper">
        Live in the moment
        <input type="checkbox" class="form-control" checked="checked">
        <span class="checkmark"></span>
    </label>
</div>
<div class="input-wrapper">
    <label class="checkbox-wrapper">
        Send greetings home
        <input type="checkbox" class="form-control">
        <span class="checkmark"></span>
    </label>
</div>
<div class="input-wrapper">
    <label class="checkbox-wrapper">
        Set an announcement
        <input type="checkbox" class="form-control">
        <span class="checkmark"></span>
    </label>
</div>
```

### More components
More components will be supported soon.

## Demo

![Bootrap example](https://i.ibb.co/pLjx046/bootrap.png)

[Click here for demo!](https://verdreht.github.io/Bootrap/)

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
