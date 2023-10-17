// AboutPage.js

import React from 'react';

function AboutPage() {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center">
            <div className="mt-4 mb-4 bg-white p-4 rounded w-95 h-auto">
                <h2 className="mb-4 font-semibold text-2xl text-center">About Jakkebiks</h2>

                <p className="mb-4">
                    At Jakkebiks, we revolutionize the way venues manage whejardrobes. Gone are the days of manual tracking and paper snippets. With our state-of-the-art digital wardrobe solution, we aim to make the experience seamless for both venues and their patrons.
                </p>

                <h3 className="mb-2 font-semibold text-xl">Why Choose Jakkebiks?</h3>
                <ul className="list-disc pl-5 mb-4">
                    <li className="mb-2">No More Paper Snippets: Our digital system eradicates the need for paper snippets, making the check-in and check-out processes faster and more efficient.</li>
                    <li className="mb-2">Eco-Friendly: By eliminating paper snippets, we're not only saving trees but also reducing waste, making our solution a green choice for environmentally conscious venues.</li>
                    <li className="mb-2">Never Lose a Snippet: With Jakkebiks, patrons no longer face the hassle or worry of losing their wardrobe snippet. Everything is digitally tracked, ensuring peace of mind and a smooth experience.</li>
                </ul>

                <p className="mb-4">
                    Our dedication to innovation and customer experience has positioned Jakkebiks as a leader in the digital wardrobe solutions industry. We're proud to serve venues globally, enhancing their operational efficiency and elevating the patron experience.
                </p>

                <p>
                    Join us on our mission to transform venue wardrobe management and take a step towards a greener, more efficient future.
                </p>
            </div>
        </div>
    );
}

export default AboutPage;
