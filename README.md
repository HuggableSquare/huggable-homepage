huggable-homepage
=================
this is a poorly made (less and less with each commit) new tab/home page that I made using the css from my website ([pogonip.pw](http://pogonip.pw/))  
btw, the clock/calendar/link buttons in the bottom left toggle the clock/date/links, respectively  
and, clicking on the actual clock will switch between 12 and 24 hour modes  
  
dependencies
------------
the dependencies are managed using `yarn`  
here's a list of them:
+ hover - [http://ianlunn.github.io/Hover/](http://ianlunn.github.io/Hover/)
+ fontawesome - [http://fontawesome.io/](http://fontawesome.io/)  

also shoutout to this guy for the clock.js base: [http://www.alessioatzeni.com/blog/css3-digital-clock-with-jquery/](http://www.alessioatzeni.com/blog/css3-digital-clock-with-jquery/)  

setup
-----
assuming you don't need the same websites as me on your new tab page, you can change the spans to fit your needs. the labels are what shows on the parent button, and the links are what shows up in the child buttons. if you know any html at all you can probably figure it out.  

other than that, it's pretty self-explanatory, but with dependencies in mind, either stick with the cdn, or if you want an entirely offline setup you can download them and change the paths in new.html (entirely up to you)  

and, since chrome doesn't support custom new tab pages, you can load the folder as an extension (hence the manifest.json) or you can download some other extension that does the same thing (also entirely up to you)  

screenshots
-----------
these screenshots aren't always up-to-date, so a live demo is available [here](http://huggablesquare.github.io/huggable-homepage/new.html)

![time_and_date](http://i.imgur.com/O6HlqZ0.png)
![date_only](http://i.imgur.com/ab1r70W.png)
![neither](http://i.imgur.com/ZIbqEwv.png)
