.br{font-family:monospace; font-weight:bold;}
[writing in markdown first, will HTML-ify later]

# blockydob.blend
or: glorified blog post... 2!!

<2026 March 3--11>

[IMG: the final gif; maybe a turnaround also]
	whatever. dobermanns your kiramman

Woof.

## prelude
Late February. You are sick for the second time in the calendar year, an unusual frequency for you, which makes the whole thing just a little more bullshit than usual. Whilst languishing melodramatically, you recall that, having spent much of the previous month on [a 3D video game](https://a-flyleaf.github.io/blog/hillboosted-runmaxing), you've been wanting to get back into the medium yourself. (The, uh, 3D part. You know fuckall about game-making.)

As you have nothing better to do than zone out to [social media](https://xcancel.com/chloeworthyart/status/2011501176404009349) and YouTube videos, you stumble upon [an entire low-poly character modeling course](https://www.youtube.com/playlist?list=PLcaQc6eQjXCxWXmn5jxE_GTOft9ZxChu1).

Your fate is sealed.

### cursory attempts
<IMG: serenatest>

Your first venture is of course [your own character](https://a-flyleaf.github.io/projects/tfe/). (You *could* follow the tutorial piece-for-piece, but you've [done this before](https://a-flyleaf.github.io/ygbtdm/gallery/spin), and would rather wing it.) It is a good re-introduction to the program and how pixel-pushing in three dimensions works. You have no particular ambitions with it, but already passively-absorbed knowledge from tutorial-binging is making your workflow much, *much* faster than the first time around.

Then you get lost in clothing confusion modifier hell, and set the file aside for a while.

<IMG: kiradob (OG sketch)>

For your next attempt you consider jumping off the deep end. Your actual character fixation <i lang="fr">du jour</i> is [some nerd with blue hair and war crimes](https://wiki.leagueoflegends.com/en-us/File:Caitlyn_Arcane_13_Render.png), and for some convoluted reasons you will not be elaborating upon, you have taken to likening her to a dog; specifically, [this](https://old.reddit.com/r/arcane/comments/12o33ej/no_spoilers_holy_shit_i_never_noticed_the/jggqpzh/) [dog](https://en.wikipedia.org/wiki/Choking_Doberman).

So, fuck it. Furry beam.

<IMG: kiradob (model) id #kiradob>

You get about this far before realizing
1. you have no idea how the face edge loops work,
2. you have no idea how the hand/paw edge loops work, and
3. you've toyed with this high-poly nonsense before, to a [limited degree](https://a-flyleaf.github.io/ygbtdm/gallery/roundups/2022-09), and... well, you didn't *hate* it or anything. But you also remember it taking forever, and that was only a head. You don't really want to take forever on this.

You're also done typing in second-person, now.

## the actual thign
<IMG: blockydob concepts (id "eyes")>
	You (the reader) might notice the eyes are only vaguely planned, and then absent from the turnaround altogether. Stick a pin in that.

Get blockified, idiot.

The anatomy immediately & deliberately changed from "dog standing on hind legs"-type anthro to "human with dog head & extremities"-style structure, mostly because I figured it'd be simpler to model. (The legs. I'm talking about the legs. That high-heel bend was a pain in the ass to position right, and I have yet to mess with bending limbs that way in 3D motion.)

And it was, in fact, simpler! By the end of the day I had the whole thing fully made and done, all cubular.

<IMG: 00>
	Tbh, I probably could've done it all even faster, if not for one teeny tiny minute detail that is ultimately unnoticeable to anyone who is not me: No right angles! In keeping with <i>Arcane</i>'s hand-crafted "no straight lines, no perfect circles, subtle asymmetry everywhere"\* design philosphy, I deliberately freehanded most of the vertices. Or I'd snap them to the grid, then intentionally shove them around a little. Make the box model infinitesimally more organic, sure.
	
	<small>\*Paraphrashing; citation needed. I can't remember the exact quote, but this principle got highlighted in either the official artbook or somewhere in [the season&nbsp;1 behind-the-scenes](https://www.youtube.com/playlist?list=PLbAFXJC0J5GYEkfxnGTWnvgcEypgBeAb5). It's been a while.</small>

The markings weren't particularly planned, but I thought a Minecraft-esque pixel style would fit the simplification nicely. So I did some quick automatic UV unwraps, scribbled on a texture to get a feel for it, and called it a night.

<IMG: 00_texturetest>

### model tweaks & clothing get
Theoretically, the mouth was supposed to open. Some face and edge futzing later, that got done. And then I was extra-possessed and decided to make the entire model one (1) continuous object.

<IMG: 01/02, maybe a before/after?>

No, the shoulder/upper arm region would not be visible with the separately-modeled top. Oh well. It was irking me that the legs were continuous with the body and nothing else was; and, rather than split those off, I figured I'd just connect everything.

Anyway.

<IMG: 02, 03>

90% of the base model has the exact same solid color. ([Gradient textures](https://www.youtube.com/watch?v=9ITJgW9hVrE) might be neat to mess with some time, but not this time.) Did I *need* to line up almost every pixel on almost every side, ensuring all the while that the sides are distinct & the UV maps don't overlap? No.

And yet!

<IMG: 04>
	I also didn't need to color-mark the front/back/outer side/inner side faces. Whatever. #hashtagEnrichment. I definitely know more about how UVs work now than I did before, having not touched UVs basically at all before this.

There was a lot of back-and-forth nonsense between Blender and FireAlpaca ([art program](https://firealpaca.com/)) here, btw. I thought it'd be clever to keep each part on its own layer, even if this meant re-exporting the PNG a billion times. At some point later in I gave up on this entirely, but an attempt was made.

Clothes got modeled along the way, to the extent that they're modeled separately at all. The turtleneck & pants, give or take the belt and shoes, were always planned to be part of the base texture ([the overall design](https://www.artstation.com/artwork/XJW1n3) is fairly easy to simplify) but the top and the shoe cuffs are noticeably separate.

<IMG: 06>
	The belt clasp-things, at this stage, I figured could be part of the texture; they got split off later for extra shine.
	
	Heels, uh, I did not bother with at all. Wasn't sure what the logistics of lifting the armature-shoe would be, and how that might affect movement, if that part of the model was visible.

These, I *did* keep snapped to the grid, all right-angled and front-back overlapping. The shoulder area especially got simplified, compared to the confused tri-quad fuckery of the base model. I knew, from [some](https://sfmlab.com/tutorials/view/8c70e8ef-5a74-4a47-b368-9d2db6b3b725/) [other](https://www.youtube.com/watch?v=_StljmlDmEQ) [tutorials](https://www.youtube.com/watch?v=IkfgHp_eDdE), that it should be possible to move both clothes and base model together seamlessly..ish. I probably could've gone back and simplified the base shoulders, too, but *w/e* I had to call it #GoodEnough and move on.

### no one nodes
<IMG: 07>

There was, at this point, a small dilemma. I hadn't decided on exact base colors, and thought it might be fun if I could edit those directly in Blender. I also knew the not-separately-modeled clothing would be on an overlapping layer, 2D-art-wise, and while I had (and still have) no real plans to swap it out, it'd be neat if that's a thing that *could* be done. *And,* I wanted certain details like the metallic trim to use a different texture entirely, react a little differently to light. (The tutorial uses a flat, shadeless look, but I'm a sucker for mood lighting.)

In other words: want texture to Have Layer.

<IMG: 07 nodetest>
	This got... more complicated, later, but this is the base of the thing.
	
	<details>
		<summary>For those curious (and my own future reference): <small><i>[click for dropdown]</i></small></summary>
		
		1. A single image texture can get plugged directly into the shader (in this case, Pricipled BSDF), <span class="br">Color</span> to <span cass="br">Base Color</span>.
		2. Multiple images can be combined with the <span class="br">Mix Color</span> node. The base image gets plugged into A; the overlapping layer connects to B, with the <span class="br">Alpha</span> to the <span class="br">Mix</span> <span class="br">Factor</span> (ensures transparency).
		3. For this use case, the marking image uses fully white (``#FFFFFF``) silhouettes; the color is added with a Multiply node (<span class="br">Mix Color</span> with the second dropdown set to <span class="br">Multiply</span>), with A as the desired color & B connecting the image itself.
		
		- You can also accomplish this using black ``#000000`` silhouettes with an Add/Screen node, and probably other color blending modes. It's more or less the same as any image editing program.
		- <strong style="text-transform:uppercase;">Important</strong>: The UVs are *exactly the same* for both images. If you try to, say, move the overlap 1 pixel to the side, this will *also* shift the *base* 1 pixel to the side. If there's a way to separate them without creating an entirely separate overlapping object, idk! <small>(Might be possible with something like I ended up using for the eyes? Test at your own peril.)</small>
	</details>

I did not figure this out all by myself, but sadly did not save links to whichever specific tutorials or stackexchange threads helped me out. RIP. In any case, this ↑ is what I landed on for a preliminary run...

<IMG: 08, 09, 10>

...aaand we landed here! The ear polygons got simplified & the belt-metal split off along the way. An unintended side effect of how I set up the textures is that the clothing, particularly on the ankle, shines very blue in the light. The tint is not supposed to be that strong. *Oh well.*

I also considered throwing in some subtle [anti-aliasing](https://pixelparmesan.com/blog/anti-aliasing-fundamentals-for-pixel-artists) to round out the markings and buttons, but quickly realized that if I wanted that to look consistent I'd need to anti-aliasing, and I wanted to start making this sucker move.

It'd been a week, at this point, of doing basically nothing else with my spare waking hours. As with any novel pursuit, the earliest attempts are always going to be the "worst"; why be perfectionsitic when (hopefully) I can look back on this someday and redo it all in half the time?

[Finished, not perfect.](https://www.youtube.com/watch?v=lRtV-ugIT0k) [Fail faster.](https://www.youtube.com/watch?v=rDjrOaoHz9s) *Aaaaaaaaaaaa.*

> MINI FAQ
> Why not take a break?
> I don't do breaks I hyperfocus and die. <small>(or: I know myself and prolonged "breaks" tend to be a death knell.)</small> Next question.
> </MINI FAQ>

### making the sucker move
Not that I've been consistent with my file version breakpoints ever, but about 11 of the 32 .blend files constructing this thing were devoted entirely to rigging. And bugtesting the rig. And fixing the rig. And tweaking the rig. And---

<IMG: idk some Part up to 17ish>

An annoying thing with rigging is that it's A Lot Of Tedium and not the fun kind. (Er, *I* think certain kinds of tedium are fun, anyway. Coding, for instance. Creative problem-solving. Mindless pixel-pushing, even. Rigging is, in my experience so far, mostly just clicking points in ways that should make them do the thing and then trying to reverse-engineer why they are not doing the thing.) It's also not super amenable to being shown visually.

Look, uhh, here's [the Crashsune tutorial weight painting part](https://www.youtube.com/watch?v=Xooago2F8h8&list=PLcaQc6eQjXCxWXmn5jxE_GTOft9ZxChu1&index=11). That's the bit I'm complaining about, mostly. I *am* extremely glad that this tutorial introduced me to Rigify, which auto-generates all the fancy bone movement bits and eliminates that entire chunk of tedium---although it *does* introduce its own overwhelm, such as, uh...

<IMG: screenshot of like. DEF-spine-006 you know what it is>
	*I'm not advanced enough for this help*

I do feel a bit like this is the equivalent of using Bootstrap and a CMS for a static two-page site---sorry, in plain less-nerdy English, it's a bit like going "I would like to play piano," being directed to a piano, and you *can* start plinking away but in the process of learning how to play *well* you also need to know exactly how each string is tuned, the wood the piano was crafted from, how the angle of the thingamabob affects the doohickey, and also if you want to play one or two specific notes you need to carve them out from scratch by ripping the material from a tree raw with your bare hands.

I did the equivalent of duct-taping sticks to a pre-built sandcastle and moved along, satisfied with my efforts and ready to make the silly little animations of my dreams *oh wait no I didn't*

### the eyes.
Remember how I drew attention to the eyes (lack thereof) in [the planning phase](#eyes)? This is the part where it comes back to haunt me.

You see, the OG tutorial series uses flat textures for the entire face. This is simple and easy to accomplish, because the character's face is mostly a single flat plane, anime-style. There's a [later addendum](https://www.youtube.com/watch?v=GAoaBfMqSBo&list=PLcaQc6eQjXCxWXmn5jxE_GTOft9ZxChu1&index=13) in which the irises are made moveable, which is (relatively) simple and easy to edit because the entirety of the eyes fit onto one (1) face.

<IMG: 17>

This is not the case for me.

I *did,* demonstrating some stray crumbs of forethought, make the eye area of the base texture transparent, and use a separate object underneath for the sclerae (eye-whites). Did I account for the multi-planar nature of the thing *no*. Did it take one simple easy try to get it right *no*. Did I manage to make the irises moveable, in a way that made sense from both front and side views, with nice smooth animation and everything *oh. Surely you jest.*

<IMG: 21? and/or the existing 26>
	An upright plane of teeth got added along the way. As a break from the (eye) horrors.

Eventually. *Eventually.* Several false starts and glitched-to-all-hell attempts later. I settled on making the entire (inner! the brows are another thing!) eye area a flat, swappable texture, and basically following the tutorial's [face-swap techinque](https://www.youtube.com/watch?v=3fHeWqKpBTc&list=PLcaQc6eQjXCxWXmn5jxE_GTOft9ZxChu1&index=11) but *just* for the irises. I didn't love the node redundancy, though, so after scavenging [elsewhere](https://www.youtube.com/watch?v=Rfc5eGHC8Ro) and the tutorial's comments, I found this stupid simple method from @[gibbhartin643](https://www.youtube.com/watch?v=3fHeWqKpBTc&lc=UgwXs7KePK-LRfNV0AB4AaABAg.ARqLWmRByT5ATXd87Z8FKZ):

<IMG: the fuckign nodes>

Now I have to redraw the texture every time I want the eyes to do something different, but. BUT. it does "work."

<IMG: "_arewedoneyet.blend">

Also I never applied the Mirror modifier so I'd have to re-wrangle everythign to make the eyes not exactly the same on both sides lol <em style="text-transform:uppercase;">anyway---</em>

## "final" render
Step one: Make boat.

<IMG: OG model, ft. references>
	"did you use a reference compilation like this for the actual character" no lol.  
	<small>(I skimmed a handful of image search results for the [high-poly dobermann](#kiradob), have drawn the (human) character a good handful of times, and the rest was between me and 32 <span class="br">.blend</span> files.)</sma

Step two: Make the rest of the fuckign render.

<IMG: 31>

There were a couple scrapped attempts at different lighting setups & some slight movement (since, y'know, it's a fully-rigged model that *can* animate), but I truly was nearing the Sick Of Looking At This point and didn't want to end on a bitter note. Ultimately I settled on lighting that attempts to mimic the 3D Viewport's material view, threw in a slight side-shifting camera movement (which, hey, is the exact effect I talked about (but didn't know how to implement) [last time](https://a-flyleaf.github.io/shriblets/2022-09-1920-3d ADD ID TO "make the camera move")...!), aaaand...

<IMG: if we tweak the gif v31 goes here. if not then 31 again, maybe viewport in the camera & static side-by-side. scrapped lighting also perhaps?>
	

<div style="text-align:center;">
	<big>~\*~*Done~\*~</big>
	<small>(for now.)</small>
</div>

## postscript
Good fucking *lord* I learned a lot with this. Have some notes-to-self.

- *Plan. the face. in advance.*
- Palette would also be nice to have down in advance. It is much, *much* easier to tweak the colors in a 2D program & re-export the texture than to modify them in the node editor on the fly---although I'm glad I learned how!
- I did not need to go that hard on making the model vertices imprecise. I like the theory of it, though I don't have a trained enough eye to know if it makes a difference in the final not-Perspective-view result. Could maybe be accomplished in future renders by doing everything ~pixel-perfect, then applying some kind of vertex deformation on top of everything else?
- Low-poly joints are weird. Mess with and/or research corner edge loops more to get a feel for how different edges deform.
- *If it's not visible don't Fuckign worry too much about it.* Applies to, say, UV pixel alignment where there will not actually be pixel edges; overlapping UVs in general; possibly even modeling entire body parts where clothes will cover them later.
	- untested thought: Use a texture for covered body parts (limbs, namely) & make it transparent when clothes are on. There will still *technically* be clipping, but you won't see it!
- The entire model *can* be rigged (and moved asymmetrically!) without applying the Mirror modifier, but consider applying it for the eyes (independent! movement!! e.g. both looking leftward) & clothing (shape keys apply to both sides otherwise).
- Save yourself a headache and screenshot where all the rigify bones go once they're positioned, both on the metarig and result. And/or try making an armature from scratch again. Homebrewing it is more tedious, but you'll have a better idea of what goes where.

I am not *not* tempted to go back and redo some parts that are irking me here (face. but also smaller details around the joints, maybe add that antialiasing; the textures ended up a *nightmare* with multiple semi-overlapping images, and can absolutely be simplified) <em style="text-transform:uppercase;font-style:normal;">but.</em> but but but. All of that would involve non-small & possibly-destructive changes to the model that I Don't Want To Do Right Now. They are things that I am filing squarely under Learning Experience, will keep in mind moving forward, and whether I revisit this with improvements or (if enough time has passed & I'm substantially better at 3D by then) from scratch is up to future me.

Current-me *out*.

<IMG: idk silly render. long neck maybe. draw me like one of your french dobs>

Thanks for reading~