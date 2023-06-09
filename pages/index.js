import Loader from "@/components/Loader";
import personas from "@/data/viralWebData";
import Image from "next/legacy/image";
import Head from "next/head";
import { Configuration, OpenAIApi } from "openai";
import React, { useEffect, useState } from "react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import ButtonLoader from "@/components/ButtonLoader";
import PixelBomb from "/assets/svg/viral-web/pixel-bomb.svg";
import PixelHaha from "/assets/svg/viral-web/pixel-haha-emoji.svg";
import PixelHeart from "/assets/svg/viral-web/pixel-heart.svg";
import PixelWeed from "/assets/svg/viral-web/pixel-weed.svg";
const configuration = new Configuration({
    apiKey: "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"
});
const openai = new OpenAIApi(configuration);

const ViralWeb = () => {
    const [selectedPersona, setSelectedPersona] = useState(personas[0]);
    const [userInput, setUserInput] = useState("");
    const [advice, setAdvice] = useState("");
    const [screenMode, setScreenMode] = useState("");
    const [isGenerated, setGenerated] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [feedbackInput, setFeedbackInput] = useState("");
    const [isFeedbackSubmitted, setFeedbackSubmitted] = useState(false);
    const personaStats = [
        {
            type: "Chill",
            icon: <PixelWeed />,
            percentage: selectedPersona.stats.chill,
            bgColor: "#40B65A"
        },
        {
            type: "Love",
            icon: <PixelHeart />,
            percentage: selectedPersona.stats.love,
            bgColor: "#E15656"
        },
        {
            type: "Bold",
            icon: <PixelBomb />,
            percentage: selectedPersona.stats.bold,
            bgColor: "#6A53AC"
        },
        {
            type: "Fun",
            icon: <PixelHaha />,
            percentage: selectedPersona.stats.fun,
            bgColor: "#FEAD61"
        }
    ];

    const getAIResponse = async (persona) => {
        const prompt = `You goal is to give advice in the style of ${persona.name} on the following situation.\n${persona.personality}Make 3 paragraphs and keep it around 900 and 1100 characters.\nDo not exceed 1100 characters\n\nSituation:\n${userInput}`;
        // console.log(prompt)

        await openai
            .createCompletion(
                {
                    model: "text-davinci-003",
                    prompt: prompt,
                    temperature: 0.7,
                    max_tokens: 1000,
                    top_p: 1,
                    frequency_penalty: 0,
                    presence_penalty: 0,
                    stream: false
                },
                {
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            )
            .then((response) => {
                // console.log(response)
                setAdvice(response.data.choices[0].text);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                window.alert("There was an error, please try again");
                setLoading(false);
            });
    };

    const generateAdvice = async (e) => {
        e.preventDefault();
        setLoading(true);
        await getAIResponse(selectedPersona);
        setGenerated(true);
    };

    const handleFeedbackSubmit = async (event) => {
        event.preventDefault();
        // console.log('feedbackInput', feedbackInput)
        return fetch("https://api.apispreadsheets.com/data/ruvU7lsl8oWuFZTn/", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: JSON.stringify({
                data: { "Suggested celebrity": feedbackInput }
            })
        })
            .then(function (response) {
                if (response.ok) {
                    setFeedbackSubmitted(true);
                } else {
                    alert("There was an error submitting your data");
                }
            })
            .catch(function (error) {
                console.log(error);
                alert("There was an error submitting your data");
            });
    };

    const handlePersonaClick = async (persona) => {
        if (isGenerated) {
            setSelectedPersona(persona);
            setAdvice("");
        } else {
            setSelectedPersona(persona);
        }
    };

    useEffect(() => {
        const getScreenMode = () => {
            const screenMode =
                window.innerWidth >= 1024
                    ? "desktop"
                    : window.innerWidth >= 768
                    ? "tablet"
                    : window.innerWidth >= 480
                    ? "largeMobile"
                    : "mobile";
            setScreenMode(screenMode);
        };

        window.addEventListener("resize", getScreenMode);
        getScreenMode();

        return () => window.removeEventListener("resize", getScreenMode);
    }, []);

    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, maximum-scale=1"
                />
                <link rel="icon" sizes="192x192" href="/logo.png"></link>
                <link
                    rel="shortcut icon"
                    href="/logo.png"
                    type="image/png"
                ></link>
                <link
                    rel="apple-touch-icon"
                    href="/logo.png"
                    type="image/png"
                ></link>
                <title>My Celebrity Therapist - Bloom</title>
            </Head>
            <div className="ai-app">
                <div>
                    <Image
                        src="/images/viral-web/celebrity-header-log.png"
                        width={400}
                        height={100}
                        alt=""
                    />
                </div>
                <div className="hero-section">
                    <div className="hero-cat">
                        <Image
                            src="/images/viral-web/questioned-cat.png"
                            width={125}
                            height={120}
                            alt=""
                        />
                    </div>
                    <div className="hero-info">
                        <p>
                            Stuck in a rut? Let your favorite celebs be your
                            unlicensed therapists! Their advice might get very
                            questionable but it'll sure be more fun than venting
                            to your poor cat.
                        </p>
                        <p className="hero-disclaimer">
                            <span>Disclaimer:</span> Please note that this
                            AI-generated advice is for entertainment purposes
                            only and should not be taken as professional advice.
                        </p>
                    </div>
                </div>
                <form onSubmit={generateAdvice}>
                    <div className="title">
                        <div className="number first-step">
                            <span>1</span>
                        </div>
                        <h1>Write what's on your mind?</h1>
                    </div>
                    <textarea
                        id="userInput"
                        value={userInput}
                        onChange={(event) => {
                            setUserInput(event.target.value);
                            setGenerated(false);
                        }}
                        required
                        rows="6"
                        maxLength={250}
                        placeholder="Type here..."
                    />
                    <div className="title">
                        <div className="number second-step">
                            <span>2</span>
                        </div>
                        <h1>Select your therapist</h1>
                    </div>
                    <div className="persona-selection-container">
                        <Swiper
                            navigation={true}
                            modules={[Navigation]}
                            spaceBetween={10}
                            slidesPerView={
                                screenMode === "desktop"
                                    ? 4.5
                                    : screenMode === "tablet"
                                    ? 3.5
                                    : screenMode === "largeMobile"
                                    ? 2
                                    : 1.25
                            }
                        >
                            {personas.map((persona) => (
                                <SwiperSlide key={persona.name}>
                                    <div
                                        className={`persona ${
                                            selectedPersona.name ===
                                            persona.name
                                                ? "selected"
                                                : ""
                                        }`}
                                        onClick={() =>
                                            handlePersonaClick(persona)
                                        }
                                    >
                                        <Image
                                            src={persona.imagePath}
                                            width={296}
                                            height={245}
                                            alt=""
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className="persona-selected-details">
                            <div className="persona-details">
                                <p>{selectedPersona.name}</p>
                                <p>{selectedPersona.profession}</p>
                                <p>{selectedPersona.introMessage}</p>
                            </div>
                            <div className="persona-stats">
                                <p className="stats-header">Stats:</p>
                                <ul className="stats-list">
                                    {personaStats.map((stat) => (
                                        <li
                                            className={`stats-item ${stat.type}`}
                                            key={stat.type}
                                        >
                                            <p>{stat.type}</p>
                                            <span className="stat-icon">
                                                {stat.icon}
                                            </span>
                                            <div className="stat-meter-background">
                                                <div
                                                    className="stat-meter-foreground"
                                                    style={{
                                                        width: `${stat.percentage}%`,
                                                        backgroundColor:
                                                            stat.bgColor
                                                    }}
                                                ></div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <button type="submit" disabled={isLoading}>
                        {isLoading ? (
                            <ButtonLoader />
                        ) : isGenerated ? (
                            "Re-generate Advice"
                        ) : (
                            "Generate Advice"
                        )}
                    </button>
                </form>
                <h2 className="sub-title">Celebrity Advice</h2>
                <div className="advice-section-container">
                    <div className="persona-image-container">
                        <Image
                            src={selectedPersona.iconPath}
                            width={62}
                            height={62}
                            alt=""
                        />
                        <div className="persona-info-container">
                            <h1 className="persona-name">
                                {selectedPersona.name}
                            </h1>
                            <p className="persona-profession">
                                {selectedPersona.profession}
                            </p>
                        </div>
                    </div>
                    <div className="advice-section">
                        {isLoading ? <Loader /> : advice && <p>{advice}</p>}
                    </div>
                </div>
                <div className="title">
                    <div className="number first-step">
                        <span>3</span>
                    </div>
                    <h1>Get actual mental health advice</h1>
                </div>
                <div className="bloom-promo">
                    <div className="left-col">
                        <Image
                            src="/images/viral-web/pixelated-bloom-app-demo.png"
                            width={473}
                            height={691}
                            alt=""
                        />
                    </div>
                    <div className="right-col">
                        <Image
                            src="/images/viral-web/pixelated-bloom-logo.png"
                            width={82}
                            height={35}
                            alt=""
                        />
                        <h1>Your AI-Therapist in your pocket!</h1>
                        <p>
                            Bloom combines interactive video sessions and
                            curated AI-advice, tracking and personalization to
                            create the best mental health companion. Designed by
                            therapist. Loved by users.
                        </p>
                        <div className="app-of-the-day">
                            <Image
                                src="/images/viral-web/pixelated-app-of-the-day.png"
                                width={200}
                                height={48}
                                alt=""
                            />
                            <Image
                                src="/images/viral-web/pixelated-rating.png"
                                width={160}
                                height={48}
                                alt=""
                            />
                        </div>
                        <button
                            className="pixelated-btn"
                            onClick={() =>
                                window.open(
                                    "https://get.enjoybloom.com/onboarding",
                                    "_blank"
                                )
                            }
                        >
                            <Image
                                src="/images/viral-web/pixelated-apple-logo.png"
                                width={30}
                                height={35}
                                alt=""
                            />
                            <span>Try Bloom for free</span>
                        </button>
                    </div>
                </div>
                <div
                    className={`feedback-section ${
                        isFeedbackSubmitted ? "submitted" : ""
                    }`}
                >
                    {isFeedbackSubmitted ? (
                        <p>Thanks for your submission!</p>
                    ) : (
                        <>
                            <div className="title">
                                <h1>
                                    What celebrity would you like to see next?
                                </h1>
                            </div>
                            <form
                                className="feedback-form"
                                onSubmit={handleFeedbackSubmit}
                            >
                                <input
                                    type="text"
                                    placeholder="Type here..."
                                    onChange={(e) =>
                                        setFeedbackInput(e.target.value)
                                    }
                                />
                                <button type="submit">Submit</button>
                            </form>
                        </>
                    )}
                </div>

                <style jsx>
                    {`
                        :global(.layout__) {
                            background-color: #212127;
                            height: 100%;
                        }
                        :global(.footer ul .footer-item) {
                            font-family: "LoRes 15 OT";
                            font-size: 16px;
                            color: #cecef5;
                        }
                        .hero-section {
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            margin: 0;
                            padding: 80px 0 60px 0;
                            border-bottom: 5px solid #424256;
                        }

                        @media only screen and (max-width: 768px) {
                            .hero-section {
                                flex-direction: column;
                            }

                            .hero-cat {
                                align-self: center;
                                margin-right: 0;
                                margin-bottom: 20px;
                            }
                        }

                        .hero-section p {
                            max-width: unset;
                            text-align: start;
                            font-weight: 410;
                            letter-spacing: -0.02em;
                        }

                        .hero-info p:first-child {
                            color: #e0e0fd;
                            margin: 0;
                            font-size: 28px;
                            line-height: 30px;
                        }

                        .hero-disclaimer {
                            color: #adadd9;
                            margin-top: 20px;
                            font-size: 22px;
                            line-height: 24px;
                        }

                        .hero-disclaimer span {
                            color: #da6c5d;
                        }

                        @media only screen and (max-width: 600px) {
                            .hero-section {
                                flex-direction: column;
                                padding: 60px 0;
                            }
                        }

                        @media only screen and (max-width: 768px) {
                            .hero-info p:first-child {
                                font-size: 22px;
                                line-height: 28px;
                            }

                            .hero-disclaimer {
                                font-size: 20px;
                                line-height: 22px;
                            }
                        }
                    `}
                </style>
            </div>
        </>
    );
};

export default ViralWeb;
