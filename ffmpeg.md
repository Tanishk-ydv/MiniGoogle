
_____________________________________________ Converting video format into any format or size through cli __________________________________________________________________

============================================================================================================================================================================

1st command : brew install ffmpeg

ffmpeg is a command-line tool that can convert video and audio files into different formats and sizes. u can download a video file and remember its name to test all this.
AND MAKE SURE THAT VIDEO FILE IS ONLY OF 1 MIN OR LESS. 

if u want to see all the coomands of ffmpeg then u can type the following commands : 1st " ffmpeg -h " or " man ffmpeg " these commands will tell u everything that even our teacher Anuj may not know.

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

2nd command : to take a screenshot of 1 frame from any video. here i will take the name of video file as clip.mp4 (mp4 is the only extension allowed for videos) and after i take the screenshot of 1 frame rate or have reduced the video to 1 frame i will name that new file as frame.jpg. also when testing this code make sure to first locate the this video file where it located. for example if it is in the Downloads/ then u need to go in that directory then run down below code. like "cd Downloads/" then the following code.
to check if u made this file open "Finder" go to downloads section and see for name by which u saved ur 1 frame, i used frame.jpg for the name. (" -i = input" )

Command is : ffmpeg -i clip.mp4 -frames:v 1 frame.jpg

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

3rd command : to make a GIF of that download video. again i will use the name of video file as clip.mp4 and i will take out.gif as the name for that gif to be saved as.
This will also be show in the downloads section and here as we r not setting up any time limit, the whole video will get turned into a GIF

Command is : ffmpeg -i clip.mp4 out.gif

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------


4rth command : now if u only want to make a GIF of only some seconds for example 3 seconds then we will take the three seconds worth of frames out the video file. video file's name is still clip.mp4 and i will use small.gif as the name to save this file. (" -t = duration of time ")

Command is : ffmpeg -i clip.mp4 -t 3 short.gif

============================================================================================================================================================================

____________________________________________________________________ Code Practise Format __________________________________________________________________________________

brew install ffmpeg
cd Downloads/
ffmpeg -i clip.mp4 -frames:v 1 frame.jpg
ffmpeg -i clip.mp4 out.gif
ffmpeg -i clip.mp4 -t 3 short.gif

============================================================================================================================================================================
