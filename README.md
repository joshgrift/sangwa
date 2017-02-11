# sangwa
JS text-encoder

## Usage
`sangwa.to(value);` 
returns encoded text

`sangwa.from(encodedText);`
returns regular text

`sangwa.compress(value);` 
returns compressed text

`sangwa.decompress(encodedText);`
returns decompressed text

`sangwa.zip(value);` 
returns zipped text
Note: This is inefficient and takes enourmous amounts of time.
Max Characters: 10000

`sangwa.unzip(encodedText);`
returns unzipped text

## Usage
Include in html with
`<script src='https://raw.githubusercontent.com/dotjersh/sangwa/master/sangwa.min.js'></script>`

Working demo:
https://dotjersh.github.io/sangwa/
