import React, { Component } from 'react';

import historyDemo from "../../images/examples/History Mystery/history-mystery-demo.gif";

class Unity extends Component {

    render() {
        return (
            <div>
                {/* Breakpoint debugging tool to be filled in with javascript from writeBreakpoint() method */}
                <header className="header" data-id="2">
                    {/* To be filled in with javascript from writeHeader() method */}
                </header>
        
                <div className="container">
                    <div className="row">
                        <h1>Unity | Free and Powerful Game Engine!</h1>
                    </div>
                    <section>
                        <h2>Spy Hop Introduction</h2>
                        <p>
                            I first heard of{' '}<a href="https://spyhop.org/" target="_blank" rel="noopener noreferrer">Spy Hop</a> when I was in elementary school from an after-school teacher who had noticed
                            my computer skills. However, the courses she informed me about were too expensive to join at that time. Fast forward to my high school
                            years, and once again I was recommended to participate in Spy Hop, this time by my programming teacher. After learning more about their{' '}
                            <a href="https://spyhop.org/apprenticeship-program/" target="_blank" rel="noopener noreferrer">Apprenticeship Programs</a>, I immediately sent in an application!
                        </p>{/* First impressions of Spy Hop */}
                    </section>
                    <section>
                        <h2>Winter 2014 Session</h2>
                        <p>
                            The winter season of 2014 was my first experience working with Spy Hop. My initial goals were quite ambitious for a novice programmer, and
                            I quickly learned game development takes much more time and effort than I realized. Either way, I was excited to get some experience
                            creating games with an actual team! I was soon introduced to the game engine,{' '}<a href="https://unity3d.com/unity" target="_blank" rel="noopener noreferrer">Unity</a>, which Spy Hop uses for their design apprenticeship programs.
                        </p>{/* First experience with Spy Hop */}
        
                        <p>
                            Unity's interface and scripting format were entirely different from what I was used to. C#, Javascript, and Boo were the only available programming languages.
                            I noticed Javascript's similar name to Java and assumed it would be relatively the same. However, C#'s syntax is more similar to Java than JavaScript!
                            This was quite an intriguing find! Anyways, I continued with Javascript because of it's relatively looser syntax rules. After many tutorials and help from
                            the Spy Hop design team, I quickly understood how Unity functions. There were still many features of the engine I had yet to learn, but it was enough to start
                            contributing to the project.
                        </p>{/* Learning Unity */}
        
                        <p>
                            The concept of the first game I participated in was an endless scroller that taught the player which foods are beneficial and which foods are unhealthy. Because Spy Hop
                            is supported by community contributions, the games it produces have an educational aspect. Initially, we started off with a package from the{' '}
                            <a href="https://www.assetstore.unity3d.com/" target="_blank" rel="noopener noreferrer">Unity Asset Store</a> which was very polished. This is a common practice to use available assets to focus the team's time
                            on other parts of the project. Unfortunately, it was coded in C#, which was not widely known to our development team, and the complexity and relationships of the
                            package made it very hard to edit individual scripts without affecting the whole package. Because of this, we decided to start from scratch and create all of the game's components
                            ourselves. Having a demonstration of the game would've been a great addition to this section of my website. Although, I was unable to find the original files of the project we worked on.
                            If I happen to acquire them in the future, I'll update this page!
                        </p>{/* First Game */}
                    </section>
                    <section>
                        <h2>Fall 2014 Session</h2>
                        <p>
                            The next season I participated in was the fall season of 2014. For this project, we decided to create a 2D exploration game which teaches the player how antibodies in our bodies
                            work. Similar to the first game we created, we started off with a package from the asset store known as{' '}<a href="https://assetstore.unity.com/packages/tools/level-design/ferr2d-terrain-tool-11653" target="_blank" rel="noopener noreferrer">Ferr2D</a>. This package included all the fluid movement and collision of the main character along
                            with many different available terrains. We had much more success editing this package to our needs. The player is able to transform into different antibodies at will. To
                            progress and defeat all enemies in the player's path, they must change into the antibody that can neutralize the threat. Attempting to absorb an enemy while being the wrong antibody results in damage to the player.
                            I designed and implemented the GUI <i>(Graphical User Interface)</i> that allows the player to switch between antibodies. Once again, I don't have the original files to create a demonstration of the project, but I will update this
                            page if found in the future.
                        </p>{/* Second Game */}
                    </section>
                    <section>
                        <h2>Fall 2016 Session</h2>
                        <p>
                            The fall 2016 season was my last session with Spy Hop. During this one, instead of the apprenticeship consisting of just game development, we instead learned about many different design programs available to us! I believe 2/3's of the
                            session were various design programs, and the last 1/3 was game design. It was very intriguing and adventurous to explore all of the design options. We learned the difference between vector graphics and raster graphics as well as which programs
                            use which type. We were also introduced to 3D Modeling as well as 2D animation! Honestly, this part of the internship was a ton of fun! The programs we were taking a look into I rarely used before!
                        </p>
                        <p>
                            Eventually, when the game design portion of the internship came, I was extremely excited! In this session, I was the Head Developer! This means I was somewhat showing the other developers the ropes, much like how previous Head Developers helped me
                            understand Unity! During our brainstorm session, we decided we wanted the game to teach important U.S. historical events! We quickly decided which events we wanted to showcase as well as the idea of an exploration educational game. Initially, the player
                            has been stranded in a different time. To get back, they need to explore the different themed areas to collect essential items from each event. The player needs to retrieve these items in chronological order! There are scattered information
                            posters in each area to give a hint to the time of each event. Once you've collected all of the items in order, you are able to access the time machine and return to your time!
                        </p>
                        <p>
                            I was very impressed by the speed of the team considering our smaller time window!
                            The significant parts of the project I worked on were the map layout as well as combining all of the artwork and scripts together! I also threw in some control tutorial animations throughout the map to help the player understand how the controls work! Below is
                            a small sample of the Boston Tea Party area! You can download{' '}<a href="https://drive.google.com/file/d/1Ux07V-mTiJdyO_h8Wwd0B_VtnLR_P2wm/view" target="_blank" rel="noopener noreferrer">History Mystery</a> here!
                        </p>{/*<!-- Third Game */}
                    </section>{/* Unity Introduction Section */}
                    <img className="centered-img" src={historyDemo} alt="History Mystery Demo Animation"/>
                </div>{/* Container */}
            </div>
        );
    }
}

export default Unity;
