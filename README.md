# jWaitingModal
a jquery plugin for waiting messajes.

##Features

* Configurable

##Using
import the css and js from de dist directory
In your html code make a div with a class and id wm-modal like this <div id="wm-modal" class="wm-modal"></div>
In your javascript code write something like this:
```js
$("#wm-modal").showWmModal('wait a little, our hamsters are working fast as they can... ');
setTimeout(function () {
$("#wm-modal").hideWmModal();
}, 1000);
```


##Contributing

:smile:Before:smile: making a pull request do the following steps:

1. Run `gulp`
2. Make sure `gulp` doesn't return any errors
3. Open `demo/index.html` in your favorite browser
4. Make sure there are no errors in dev console
5. Make sure all dialogs behave correctly

Setting up the environment:

1. Install `Node.js`
2. Go to your project directory
3. Run `npm install -g gulp`
4. Run `npm install`

:sweat_smile:Hey you should only modify files inside `src` or `test` directories!:sweat_smile: Files in the `dist` directory are generated **automatically** after running `gulp`.

##Examples

HTML page example:
```html
<html>
<head>
  <meta charset="utf-8">
  <title>jWaitingModal Demo</title>
   <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <link href="../dist/jWaitingModal.min.css" rel="stylesheet">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
    <script src="../dist/jWaitingModal.min.js"></script>
    <script type="text/javascript">
        $(document).ready(function() {
            console.log("ready!");
            $("#btn-modal").click(function() {
                $("#wm-modal").showWmModal();
                setTimeout(ocultar, 2000);

                function ocultar() {
                    $("#wm-modal").hideWmModal()
                }
            });
        });
    </script>
</head>

<body>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <button id="btn-modal" class="btn form-control btn-success">show modal</button>
                <div id="wm-modal" class="wm-modal"></div>
            </div>
        </div>
    </div>

</body>

</html>
```