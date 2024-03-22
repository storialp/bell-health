import React, { useEffect, useState } from 'react';

// Since we're not actually using the FlagIcon, we won't import it
// If you have your own flag display logic, use that instead

// Define a type for the leaderboard entry
type LeaderboardEntry = {
    username: string;
    points: number;
    nationality: string;
};

// Define a type for the LeaderboardCard props
type LeaderboardCardProps = {
    rank: number;
    username: string;
    points: number;
    nationality: string;
};

function LeaderboardCard({ rank, username, points, nationality }: LeaderboardCardProps) {
    return (
        <div className={`flex items-center justify-between p-4 ${rank === 1 ? 'bg-red-100' : 'bg-white'}`}>
            <div className="flex items-center">
                <span className="font-bold text-lg">{rank}</span>
                <span className="ml-4 font-medium">{username}</span>
            </div>
            <div className="flex items-center">
                {/* Replace this with your actual flag component or image */}
                <span className={`flag-icon flag-icon-${nationality.toLowerCase()} h-6 w-6`}></span>
                <span className="ml-2 text-lg">{points}</span>
            </div>
        </div>
    );
}

export default function Leaderboard() {
    const [leaderboardData, setLeaderboardData] = useState<LeaderboardEntry[]>([]);

    useEffect(() => {
        // Fake backend data
        const fakeData = [
            { username: "Bob", points: 150, nationality: "ca" }, // Use country code for nationality
            { username: "Diana", points: 130, nationality: "au" },
            { username: "Charlie", points: 120, nationality: "uk" },
            { username: "Ethan", points: 110, nationality: "de" },
        ];

        setLeaderboardData(fakeData);
    }, []); // Empty dependency array means this effect will only run once after the initial render

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-center text-4xl font-bold mb-4">Leaderboard</h2>
            <div>
                {leaderboardData.map((entry, index) => (
                    <LeaderboardCard
                        key={index}
                        rank={index + 1}
                        username={entry.username}
                        points={entry.points}
                        nationality={entry.nationality}
                    />
                ))}
            </div>
        </div>
    );
}
