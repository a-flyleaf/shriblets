---
layout: none

lines: #who face dialogue
  - w: r
    f: [b1,e1,m2]
    d: "Hello, world?"
  - w: b
    f: [b2,e2,m1]
    d: "'Sup."

  - w: r
    f: [b2,e2,m1]
    d: "one more test..."
  - w: b
    f: [b1,e1,m2]
    d: "k"

  - w: r
    f: [e2,m1]
    d: "fellas i have misplaced my eyebrows"

lines2:
  - w: g
    f: [b1,e2,m2]
    d: "are these colors related to anything btw"
  - w: o
    f: [b2,e1,m1]
    d: "nah"
  - w: g
    f: [b2,e1,m1]
    d: "you surrre"
  - w: o
    f: [b1,e2,m2]
    d: "yea"
---
<html>
<head>
	<title>talksprite test thign</title>
	<link rel="stylesheet" href="css.css">
	<style>
		code{display:block; margin-top:.25em;}
		hr{margin:2em 0;}
	</style>
</head><body>

{%for l in page.lines%}<div class="dlg {%if l.w=="r"%}red{%else%}blue{%endif%}">
	<div class="face">{%for f in l.f%}
		<div class="fc {{f}}"></div>
	{%endfor%}</div>
	<b>{%if l.w=="r"%}Red{%else%}Blue{%endif%}</b>: {{l.d}}
	
	<code>[{%for f in l.f%}{%unless forloop.first%},{%endunless%}{{f}}{%endfor%}]</code>
</div>{%endfor%}

<hr>

OK THIS IS COOL BUT: *shitton* of images, will add up fast. let's tryyyyy a spritesheet

{%for l in page.lines2%}<div class="dlg {%if l.w=="g"%}green{%else%}orange{%endif%}">
	<div class="face">{%for f in l.f%}
		<div class="fc {{f}}"></div>
	{%endfor%}</div>
	<b>{%if l.w=="g"%}Green{%else%}Orange{%endif%}</b>: {{l.d}}
	
	<code>[{%for f in l.f%}{%unless forloop.first%},{%endunless%}{{f}}{%endfor%}]</code>
</div>{%endfor%}

jesus ok that was more of a Process---the load is way better tho SO IN CONCLUSION use a spreadsheet and gratuitous concatenation to automate the css class fuckery

</body>
</html>