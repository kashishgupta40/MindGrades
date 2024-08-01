import React, { useState } from 'react';

const MainContent = () => {
    const [posts, setPosts] = useState([
        {
            id: 1,
            author: "Rahul Singh",
            time: "2 hours ago",
            title: "Preparation Strategy",
            content: "Lorem ipsum dolor sit amet consectetur. Vitae vel sed non luctus ipsum amet mattis nulla sagittis. Ultricies consectetur vitae bibendum volutpat at.",
            likes: 100,
            comments: 13,
            shares: 25,
            newComment: ""
        },
        // Add more posts if needed
    ]);

    const handleLike = (postId) => {
        setPosts(posts.map(post => 
            post.id === postId ? { ...post, likes: post.likes + 1 } : post
        ));
    };

    const handleCommentChange = (e, postId) => {
        const { value } = e.target;
        setPosts(posts.map(post =>
            post.id === postId ? { ...post, newComment: value } : post
        ));
    };

    const handleCommentSubmit = (postId) => {
        // This would be where you handle submitting the comment to a backend or state
        setPosts(posts.map(post =>
            post.id === postId ? { ...post, comments: post.comments + 1, newComment: "" } : post
        ));
    };

    const handleShare = (postId) => {
        setPosts(posts.map(post => 
            post.id === postId ? { ...post, shares: post.shares + 1 } : post
        ));
    };

    return (
        <div className="pt-20 pl-32 pr-8">
            <div className="flex justify-between items-start">
            <div class="container mx-auto">
  <h1 class="text-3xl font-bold mb-4">Community</h1>

  <div class="flex justify-center mb-4">
    <button class="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
      <span>All</span>
    </button>
    <button class="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center ml-2">
      <span>Preparation Strategy</span>
    </button>
    <button class="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center ml-2">
      <span>Interview Experience</span>
    </button>
    <button class="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center ml-2">
      <img src="" />
    </button>
  </div>

  <div class="grid grid-cols-1 gap-4">
    <div class="bg-white rounded-lg shadow-md p-4">
      <div class="flex items-center mb-2">
        <div class="bg-blue-500 rounded-full text-white font-bold text-sm px-2 py-1 mr-2">A</div>
        <div>
          <h2 class="text-lg font-bold mb-1">Rahul Singh</h2>
          <p class="text-gray-600 text-sm">2 hours ago</p>
        </div>
        <div class="ml-auto">
          <span class="text-gray-600 text-sm">• 125</span>
        </div>
      </div>

      <div class="mb-2">
        <h3 class="text-xl font-bold mb-1">Preparation Strategy</h3>
        <p class="text-gray-600 text-sm">Lorem ipsum dolor sit amet consectetur. Vitae vel sed non luctus ipsum amet mattis nulla sagittis. Ultricies consectetur vitae bibendum volutpat at. Odio ut urna risus cras nunc facilisis a ipsum.</p>
      </div>

      <div class="flex items-center">
        <button class="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center mr-2">
          <span>Strategy</span>
        </button>
        <button class="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
          <span>Preparation</span>
        </button>
      </div>

      <div class="flex items-center mt-2">
        <svg class="w-4 h-4 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4m5-11.677l-3-3m0 0l-3-3m3 3l3 3"></path></svg>
        <span class="text-gray-600 text-sm">100</span>
        <svg class="w-4 h-4 text-gray-400 mr-2 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        <span class="text-gray-600 text-sm">13</span>
        <svg class="w-4 h-4 text-gray-400 mr-2 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9 9 0 01-9-8 9 9 0 019-8z"></path></svg>
        <span class="text-gray-600 text-sm">25</span>
      </div>

      <div class="mt-2">
        <p class="text-gray-600 text-sm">New comment 5 min ago</p>
      </div>
    </div>

    <div class="bg-white rounded-lg shadow-md p-4">
      <div class="flex items-center mb-2">
        <div class="bg-blue-500 rounded-full text-white font-bold text-sm px-2 py-1 mr-2">A</div>
        <div>
          <h2 class="text-lg font-bold mb-1">Rahul Singh</h2>
          <p class="text-gray-600 text-sm">2 hours ago</p>
        </div>
        <div class="ml-auto">
          <span class="text-gray-600 text-sm">• 125</span>
        </div>
      </div>

      <div class="mb-2">
        <h3 class="text-xl font-bold mb-1">Preparation Strategy</h3>
        <p class="text-gray-600 text-sm">Lorem ipsum dolor sit amet consectetur. Vitae vel sed non luctus ipsum amet mattis nulla sagittis. Ultricies consectetur vitae bibendum volutpat at. Odio ut urna risus cras nunc facilisis a ipsum.</p>
      </div>

      <div class="flex items-center">
        <button class="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center mr-2">
          <span>Strategy</span>
        </button>
        <button class="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
          <span>Preparation</span>
        </button>
      </div>

      <div class="flex items-center mt-2">
        <svg class="w-4 h-4 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4m5-11.677l-3-3m0 0l-3-3m3 3l3 3"></path></svg>
        <span class="text-gray-600 text-sm">100</span>
        <svg class="w-4 h-4 text-gray-400 mr-2 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        <span class="text-gray-600 text-sm">13</span>
        <svg class="w-4 h-4 text-gray-400 mr-2 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9 9 0 01-9-8 9 9 0 019-8z"></path></svg>
        <span class="text-gray-600 text-sm">25</span>
      </div>

      <div class="mt-2">
        <p class="text-gray-600 text-sm">New comment 5 min ago</p>
      </div>
    </div>

    <div class="bg-white rounded-lg shadow-md p-4">
      <div class="flex items-center mb-2">
        <div class="bg-blue-500 rounded-full text-white font-bold text-sm px-2 py-1 mr-2">R</div>
        <div>
          <h2 class="text-lg font-bold mb-1">Varun Kumar</h2>
          <p class="text-gray-600 text-sm">2 hours ago</p>
        </div>
        <div class="ml-auto">
          <span class="text-gray-600 text-sm">• 120</span>
        </div>
      </div>

      <div class="mb-2">
        <h3 class="text-xl font-bold mb-1">Preparation Strategy</h3>
        <p class="text-gray-600 text-sm">Lorem ipsum dolor sit amet consectetur. Vitae vel sed non luctus ipsum amet mattis nulla sagittis. Ultricies consectetur vitae bibendum volutpat at. Odio ut urna risus cras nunc facilisis a ipsum.</p>
      </div>

      <div class="flex items-center">
        <button class="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center mr-2">
          <span>Strategy</span>
        </button>
        <button class="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
          <span>Preparation</span>
        </button>
      </div>

      <div class="flex items-center mt-2">
        <svg class="w-4 h-4 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4m5-11.677l-3-3m0 0l-3-3m3 3l3 3"></path></svg>
        <span class="text-gray-600 text-sm">100</span>
        <svg class="w-4 h-4 text-gray-400 mr-2 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        <span class="text-gray-600 text-sm">13</span>
        <svg class="w-4 h-4 text-gray-400 mr-2 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9 9 0 01-9-8 9 9 0 019-8z"></path></svg>
        <span class="text-gray-600 text-sm">25</span>
      </div>

      <div class="mt-2">
        <p class="text-gray-600 text-sm">New comment 5 min ago</p>
      </div>
    </div>
  </div>
</div>
                <div className="w-1/3">
                <div className="bg-white p-4 rounded-md shadow-md  bg-gradient-to-r from-white-500 to-white-500">
                        
                        <div className="flex items-center">
                        <div className="relative inline-block">
                       
                     <img src="/images/bgFire.png" alt="promotion" className="w-24 h-24" />
                     <img src="/images/fire.png" alt="fire" className="absolute top-0 left-0 w-12 h-12" />
                            </div>

                            <div>
                                <p>Achieve Your Goals with Keep The Streak Alive</p>
                                <button className="px-4 py-2 bg-orange-500 text-white rounded-full mt-2">Start Practicing</button>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-4 rounded-md shadow-md mb-4">
                        <h3 className="text-lg font-semibold mb-2">Tags</h3>
                        <div className="flex flex-wrap">
                            <button className="mr-2 mb-2 px-4 py-2 bg-gray-200 rounded-full">Interview</button>
                            <button className="mr-2 mb-2 px-4 py-2 bg-gray-200 rounded-full">Strategy</button>
                            <button className="mr-2 mb-2 px-4 py-2 bg-gray-200 rounded-full">Economics</button>
                            <button className="mr-2 mb-2 px-4 py-2 bg-gray-200 rounded-full">Sociology</button>
                            <button className="mr-2 mb-2 px-4 py-2 bg-gray-200 rounded-full">Indian History</button>
                            <button className="mr-2 mb-2 px-4 py-2 bg-gray-200 rounded-full">Strategy</button>
                            <button className="mr-2 mb-2 px-4 py-2 bg-gray-200 rounded-full">Sociology</button>
                            <button className="mr-2 mb-2 px-4 py-2 bg-gray-200 rounded-full">Polity</button>
                            <button className="mr-2 mb-2 px-4 py-2 bg-gray-200 rounded-full">Indian History</button>
                            <button className="mr-2 mb-2 px-4 py-2 bg-gray-200 rounded-full">Strategy</button>
                            <button className="mr-2 mb-2 px-4 py-2 bg-gray-200 rounded-full">Sociology</button>
                            <button className="mr-2 mb-2 px-4 py-2 bg-gray-200 rounded-full">Polity</button>
                            <button className="mr-2 mb-2 px-4 py-2 bg-gray-200 rounded-full">Indian History</button>
                            <button className="mr-2 mb-2 px-4 py-2 bg-gray-200 rounded-full">Strategy</button>
                            <button className="mr-2 mb-2 px-4 py-2 bg-gray-200 rounded-full">Sociology</button>
                            <button className="mr-2 mb-2 px-4 py-2 bg-gray-200 rounded-full">Polity</button>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    );
};

export default MainContent;
