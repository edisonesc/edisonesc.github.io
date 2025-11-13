export const CV_CSS_STYLE = `.contact-information,
.links-container,
.name {
  text-transform: uppercase;
  display: inline-block
}

.contact-deets,
.links,
.name {
  display: inline-block
}

.name:hover {
  cursor: pointer;
}

.contact-deets,
.links,
.primary-titles {
  text-decoration: none
}

body {
  background-color: #f9f9f9;
  font-family: Georgia, Gudea, sans-serif;
  margin: 5% 15%
}

.name {
  color: #7a5d23;
  font-size: 1.4em;
  letter-spacing: 1px
}

.contact-information,
.links-container {
  color: #808284;
  font-size: .8em;
  letter-spacing: 1px;
  line-height: .9em
}

.contact-deets {
  color: #58585B;
  margin-bottom: 1%;
  margin-top: 1%;
}
.contact-number{
	color: #58585B;
	margin-top: .2em;
	font-size: 1.2em;
	font-family: "Times New Roman", Times, serif;
}
.links {
  color: #4e4e51;
  margin-bottom: .3em;
}

.links:hover {
  color: #8d6c10
}

.links img {
  margin-bottom: -.2em;
  padding-right: .3em;
  padding-left: .3em
}

.location,
.primary-titles {
  display: inline-block;
  margin-bottom: -1%
}

.primary-titles {
  color: #8d6c10;
  font-size: .9em;
  letter-spacing: 1px
}

.category-headers,
.location {
  letter-spacing: 2px;
  text-transform: uppercase
}

.location {
  color: #58585B;
  font-size: .8em;
  margin-top: 1.1em;
  padding-left: .4em
}

.category-headers {
  color: #8d6c10;
  font-size: .9em;
  margin-top: 3em;
  margin-bottom: .1em
}

.category-details-header {
  color: #8d6c29;
  font-size: .9em;
  line-height: 1.4em;
  margin-top: .5em;
  margin-left: 3%;
}

.category-award,
.category-details {
  font-style: italic;
  margin-bottom: 1%;
  margin-left: 2%
}

.category-details {
  color: #8d6c29;
  font-size: .9em;
  line-height: 1.4em;
  margin-top: .5em
}

.category-org,
.category-award,
.category-description,
.category-description-main {
  color: #808284;
  margin: 0 auto;
  width: 33em;
  font-size: .9em;
  line-height: 1.4em
}

.category-award {
  margin-top: 1.2em
}
.category-org {
  text-indent: 1em;
}


.category-description-main {
  margin: 1em 7% 1% 2%
}

.category-description {
  margin: .01em 7% 1% 2%
}

hr {
  border: 1px dotted #A7A9AB;
  border-style: none none dotted;
  margin: 0 10% 0 0
}

.pagebreak {
  page-break-before: always;
}`

export const B64GHIMG = 'data:image/png;base64,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'