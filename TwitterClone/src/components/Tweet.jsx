import React from "react";
import Tweet from "./twe";
export default function Tweet({ tweet }) {
  return (
    <div className="tweet-container">
      <div className="tweet-header">
        <img
          src={tweet.user.profileImage}
          alt="Profile"
          className="profile-image"
        />
        <div className="user-info">
          <span className="user-name">{tweet.user.name}</span>
          <span className="user-handle">@{tweet.user.handle}</span>
        </div>
      </div>
      <div className="tweet-content">
        <p>{tweet.content}</p>
      </div>
      <div className="tweet-footer">
        <span>{tweet.date}</span>
      </div>
    </div>
  );
}
/*{
    "results": [
        {
            "tweet_id": "1769386591137448243",
            "creation_date": "Sun Mar 17 15:33:31 +0000 2024",
            "text": "Guess the model:\n\n&gt; Prompt: \nDescribe the image in the most detailed way possible\n\n&gt; Answer:\nThe image shows a young child sitting in a high chair in a kitchen setting. The child is wearing a striped top and has a cheerful expression, with their hands resting on the high chair's… https://t.co/p4A0B6IC52",
            "media_url": [
                "https://pbs.twimg.com/media/GI4faDWWsAEclit.jpg"
            ],
            "video_url": null,
            "user": {
                "creation_date": "Sun Dec 13 03:52:21 +0000 2009",
                "user_id": "96479162",
                "username": "omarmhaimdat",
                "name": "Omar MHAIMDAT",
                "follower_count": 964,
                "following_count": 1348,
                "favourites_count": 7101,
                "is_private": false,
                "is_verified": false,
                "is_blue_verified": true,
                "location": "Casablanca, Morocco",
                "profile_pic_url": "https://pbs.twimg.com/profile_images/1271521722945110016/AvKfKpLo_normal.jpg",
                "profile_banner_url": "https://pbs.twimg.com/profile_banners/96479162/1599303392",
                "description": "Data Scientist | Software Engineer",
                "external_url": "https://t.co/Bqg9bJElJ2",
                "number_of_tweets": 3176,
                "bot": false,
                "timestamp": 1260676341,
                "has_nft_avatar": false,
                "category": null,
                "default_profile": false,
                "default_profile_image": false,
                "listed_count": 11,
                "verified_type": null
            },
            "language": "en",
            "favorite_count": 1,
            "retweet_count": 0,
            "reply_count": 0,
            "quote_count": 0,
            "retweet": false,
            "views": 175,
            "timestamp": 1710689611,
            "video_view_count": null,
            "in_reply_to_status_id": null,
            "quoted_status_id": null,
            "binding_values": null,
            "expanded_url": null,
            "retweet_tweet_id": null,
            "extended_entities": {
                "media": [
                    {
                        "display_url": "pic.twitter.com/p4A0B6IC52",
                        "expanded_url": "https://twitter.com/omarmhaimdat/status/1769386591137448243/photo/1",
                        "id_str": "1769386236039311361",
                        "indices": [
                            287,
                            310
                        ],
                        "media_key": "3_1769386236039311361",
                        "media_url_https": "https://pbs.twimg.com/media/GI4faDWWsAEclit.jpg",
                        "type": "photo",
                        "url": "https://t.co/p4A0B6IC52",
                        "ext_media_availability": {
                            "status": "Available"
                        },
                        "features": {
                            "large": {
                                "faces": [
                                    {
                                        "x": 253,
                                        "y": 158,
                                        "h": 71,
                                        "w": 71
                                    }
                                ]
                            },
                            "medium": {
                                "faces": [
                                    {
                                        "x": 253,
                                        "y": 158,
                                        "h": 71,
                                        "w": 71
                                    }
                                ]
                            },
                            "small": {
                                "faces": [
                                    {
                                        "x": 253,
                                        "y": 158,
                                        "h": 71,
                                        "w": 71
                                    }
                                ]
                            },
                            "orig": {
                                "faces": [
                                    {
                                        "x": 253,
                                        "y": 158,
                                        "h": 71,
                                        "w": 71
                                    }
                                ]
                            }
                        },
                        "sizes": {
                            "large": {
                                "h": 600,
                                "w": 600,
                                "resize": "fit"
                            },
                            "medium": {
                                "h": 600,
                                "w": 600,
                                "resize": "fit"
                            },
                            "small": {
                                "h": 600,
                                "w": 600,
                                "resize": "fit"
                            },
                            "thumb": {
                                "h": 150,
                                "w": 150,
                                "resize": "crop"
                            }
                        },
                        "original_info": {
                            "height": 600,
                            "width": 600,
                            "focus_rects": [
                                {
                                    "x": 0,
                                    "y": 0,
                                    "w": 600,
                                    "h": 336
                                },
                                {
                                    "x": 0,
                                    "y": 0,
                                    "w": 600,
                                    "h": 600
                                },
                                {
                                    "x": 74,
                                    "y": 0,
                                    "w": 526,
                                    "h": 600
                                },
                                {
                                    "x": 255,
                                    "y": 0,
                                    "w": 300,
                                    "h": 600
                                },
                                {
                                    "x": 0,
                                    "y": 0,
                                    "w": 600,
                                    "h": 600
                                }
                            ]
                        }
                    }
                ]
            },
            "conversation_id": "1769386591137448243",
            "retweet_status": null,
            "quoted_status": null,
            "bookmark_count": 0,
            "source": "Twitter Web App",
            "community_note": null
        },
        {
            "tweet_id": "1681795360748892161",
            "creation_date": "Wed Jul 19 22:37:14 +0000 2023",
            "text": "RT @lvwerra: Did you know that you can train all Llama-2 models on your own data in just a few lines?\n\nThe script even works with the 70B m…",
            "media_url": null,
            "video_url": null,
            "user": {
                "creation_date": "Sun Dec 13 03:52:21 +0000 2009",
                "user_id": "96479162",
                "username": "omarmhaimdat",
                "name": "Omar MHAIMDAT",
                "follower_count": 964,
                "following_count": 1348,
                "favourites_count": 7101,
                "is_private": false,
                "is_verified": false,
                "is_blue_verified": true,
                "location": "Casablanca, Morocco",
                "profile_pic_url": "https://pbs.twimg.com/profile_images/1271521722945110016/AvKfKpLo_normal.jpg",
                "profile_banner_url": "https://pbs.twimg.com/profile_banners/96479162/1599303392",
                "description": "Data Scientist | Software Engineer",
                "external_url": "https://t.co/Bqg9bJElJ2",
                "number_of_tweets": 3176,
                "bot": false,
                "timestamp": 1260676341,
                "has_nft_avatar": false,
                "category": null,
                "default_profile": false,
                "default_profile_image": false,
                "listed_count": 11,
                "verified_type": null
            },
            "language": "en",
            "favorite_count": 0,
            "retweet_count": 278,
            "reply_count": 0,
            "quote_count": 0,
            "retweet": true,
            "views": null,
            "timestamp": 1689806234,
            "video_view_count": null,
            "in_reply_to_status_id": null,
            "quoted_status_id": null,
            "binding_values": null,
            "expanded_url": null,
            "retweet_tweet_id": "1681701409677246471",
            "extended_entities": null,
            "conversation_id": "1681795360748892161",
            "retweet_status": {
                "tweet_id": "1681701409677246471",
                "creation_date": "Wed Jul 19 16:23:55 +0000 2023",
                "text": "Did you know that you can train all Llama-2 models on your own data in just a few lines?\n\nThe script even works with the 70B model on a single A100 GPU thanks to the magic of 4bit and and PEFT!\n\nLearn more: https://t.co/njGyWdnbzT\nFull script: https://t.co/6y9FNdYSuT https://t.co/qydJryHahs",
                "media_url": [
                    "https://pbs.twimg.com/media/F1aXj11WYAEvU7N.jpg"
                ],
                "video_url": null,
                "user": {
                    "creation_date": "Mon Mar 11 18:18:29 +0000 2019",
                    "user_id": "1105171148382326789",
                    "username": "lvwerra",
                    "name": "Leandro von Werra",
                    "follower_count": 5999,
                    "following_count": 315,
                    "favourites_count": 4036,
                    "is_private": false,
                    "is_verified": false,
                    "is_blue_verified": true,
                    "location": "Bern, Switzerland",
                    "profile_pic_url": "https://pbs.twimg.com/profile_images/1664932984196145153/UDYifACN_normal.jpg",
                    "profile_banner_url": "https://pbs.twimg.com/profile_banners/1105171148382326789/1579706530",
                    "description": "Machine learning @huggingface:  co-lead of @bigcodeproject and maintainer of TRL.",
                    "external_url": "https://t.co/4FkS4sddNF",
                    "number_of_tweets": 1340,
                    "bot": false,
                    "timestamp": 1552328309,
                    "has_nft_avatar": false,
                    "category": null,
                    "default_profile": true,
                    "default_profile_image": false,
                    "listed_count": 152,
                    "verified_type": null
                },
                "language": "en",
                "favorite_count": 1366,
                "retweet_count": 278,
                "reply_count": 18,
                "quote_count": 9,
                "retweet": false,
                "views": 191669,
                "timestamp": 1689783835,
                "video_view_count": null,
                "in_reply_to_status_id": null,
                "quoted_status_id": null,
                "binding_values": null,
                "expanded_url": "https://huggingface.co/docs/trl/main/en/lora_tuning_peft#finetuning-llama2-model",
                "retweet_tweet_id": null,
                "extended_entities": {
                    "media": [
                        {
                            "display_url": "pic.twitter.com/qydJryHahs",
                            "expanded_url": "https://twitter.com/lvwerra/status/1681701409677246471/photo/1",
                            "id_str": "1681698152871518209",
                            "indices": [
                                268,
                                291
                            ],
                            "media_key": "3_1681698152871518209",
                            "media_url_https": "https://pbs.twimg.com/media/F1aXj11WYAEvU7N.jpg",
                            "type": "photo",
                            "url": "https://t.co/qydJryHahs",
                            "ext_media_availability": {
                                "status": "Available"
                            },
                            "features": {
                                "large": {
                                    "faces": []
                                },
                                "medium": {
                                    "faces": []
                                },
                                "small": {
                                    "faces": []
                                },
                                "orig": {
                                    "faces": []
                                }
                            },
                            "sizes": {
                                "large": {
                                    "h": 650,
                                    "w": 1006,
                                    "resize": "fit"
                                },
                                "medium": {
                                    "h": 650,
                                    "w": 1006,
                                    "resize": "fit"
                                },
                                "small": {
                                    "h": 439,
                                    "w": 680,
                                    "resize": "fit"
                                },
                                "thumb": {
                                    "h": 150,
                                    "w": 150,
                                    "resize": "crop"
                                }
                            },
                            "original_info": {
                                "height": 650,
                                "width": 1006,
                                "focus_rects": [
                                    {
                                        "x": 0,
                                        "y": 0,
                                        "w": 1006,
                                        "h": 563
                                    },
                                    {
                                        "x": 0,
                                        "y": 0,
                                        "w": 650,
                                        "h": 650
                                    },
                                    {
                                        "x": 0,
                                        "y": 0,
                                        "w": 570,
                                        "h": 650
                                    },
                                    {
                                        "x": 13,
                                        "y": 0,
                                        "w": 325,
                                        "h": 650
                                    },
                                    {
                                        "x": 0,
                                        "y": 0,
                                        "w": 1006,
                                        "h": 650
                                    }
                                ]
                            }
                        }
                    ]
                },
                "conversation_id": "1681701409677246471",
                "retweet_status": null,
                "quoted_status": null,
                "bookmark_count": 1216,
                "source": "Twitter Web App",
                "community_note": null
            },
            "quoted_status": null,
            "bookmark_count": 0,
            "source": "Twitter for Mac",
            "community_note": null
        },
        {
            "tweet_id": "1654934719086092290",
            "creation_date": "Sat May 06 19:42:38 +0000 2023",
            "text": "RT @Tim_Dettmers: @karpathy Super excited to push this even further:\n- Next week: bitsandbytes 4-bit closed beta that allows you to finetun…",
            "media_url": null,
            "video_url": null,
            "user": {
                "creation_date": "Sun Dec 13 03:52:21 +0000 2009",
                "user_id": "96479162",
                "username": "omarmhaimdat",
                "name": "Omar MHAIMDAT",
                "follower_count": 964,
                "following_count": 1348,
                "favourites_count": 7101,
                "is_private": false,
                "is_verified": false,
                "is_blue_verified": true,
                "location": "Casablanca, Morocco",
                "profile_pic_url": "https://pbs.twimg.com/profile_images/1271521722945110016/AvKfKpLo_normal.jpg",
                "profile_banner_url": "https://pbs.twimg.com/profile_banners/96479162/1599303392",
                "description": "Data Scientist | Software Engineer",
                "external_url": "https://t.co/Bqg9bJElJ2",
                "number_of_tweets": 3176,
                "bot": false,
                "timestamp": 1260676341,
                "has_nft_avatar": false,
                "category": null,
                "default_profile": false,
                "default_profile_image": false,
                "listed_count": 11,
                "verified_type": null
            },
            "language": "en",
            "favorite_count": 0,
            "retweet_count": 193,
            "reply_count": 0,
            "quote_count": 0,
            "retweet": true,
            "views": null,
            "timestamp": 1683402158,
            "video_view_count": null,
            "in_reply_to_status_id": null,
            "quoted_status_id": null,
            "binding_values": null,
            "expanded_url": null,
            "retweet_tweet_id": "1654917326381228033",
            "extended_entities": null,
            "conversation_id": "1654934719086092290",
            "retweet_status": {
                "tweet_id": "1654917326381228033",
                "creation_date": "Sat May 06 18:33:32 +0000 2023",
                "text": "@karpathy Super excited to push this even further:\n- Next week: bitsandbytes 4-bit closed beta that allows you to finetune 30B/65B LLaMA models on a single 24/48 GB GPU (no degradation vs full fine-tuning in 16-bit)\n-  Two weeks: Full release of code, paper, and a collection of 65B models",
                "media_url": null,
                "video_url": null,
                "user": {
                    "creation_date": "Wed Oct 10 18:18:30 +0000 2012",
                    "user_id": "872274950",
                    "username": "Tim_Dettmers",
                    "name": "Tim Dettmers",
                    "follower_count": 29288,
                    "following_count": 834,
                    "favourites_count": 3299,
                    "is_private": false,
                    "is_verified": false,
                    "is_blue_verified": true,
                    "location": "Seattle, WA",
                    "profile_pic_url": "https://pbs.twimg.com/profile_images/1465151884310683652/v4G_57En_normal.jpg",
                    "profile_banner_url": "https://pbs.twimg.com/profile_banners/872274950/1536159170",
                    "description": "PhD Student at @UW. I blog about deep learning and PhD life at https://t.co/Y78KDJJFE7.",
                    "external_url": "https://t.co/H5HgSvHWXO",
                    "number_of_tweets": 3003,
                    "bot": false,
                    "timestamp": 1349893110,
                    "has_nft_avatar": false,
                    "category": null,
                    "default_profile": true,
                    "default_profile_image": false,
                    "listed_count": 545,
                    "verified_type": null
                },
                "language": "en",
                "favorite_count": 1396,
                "retweet_count": 193,
                "reply_count": 39,
                "quote_count": 37,
                "retweet": false,
                "views": 364394,
                "timestamp": 1683398012,
                "video_view_count": null,
                "in_reply_to_status_id": "1654892810590650376",
                "quoted_status_id": null,
                "binding_values": null,
                "expanded_url": null,
                "retweet_tweet_id": null,
                "extended_entities": null,
                "conversation_id": "1654892810590650376",
                "retweet_status": null,
                "quoted_status": null,
                "bookmark_count": 304,
                "source": "Twitter Web App",
                "community_note": null
            },
            "quoted_status": null,
            "bookmark_count": 0,
            "source": "Twitter for iPhone",
            "community_note": null
        },
        {
            "tweet_id": "1646992900851396609",
            "creation_date": "Fri Apr 14 21:44:41 +0000 2023",
            "text": "RT @DanHollick: How does a Large Language Model like ChatGPT actually work?\n\nWell, they are both amazingly simple and exceedingly complex a…",
            "media_url": null,
            "video_url": null,
            "user": {
                "creation_date": "Sun Dec 13 03:52:21 +0000 2009",
                "user_id": "96479162",
                "username": "omarmhaimdat",
                "name": "Omar MHAIMDAT",
                "follower_count": 964,
                "following_count": 1348,
                "favourites_count": 7101,
                "is_private": false,
                "is_verified": false,
                "is_blue_verified": true,
                "location": "Casablanca, Morocco",
                "profile_pic_url": "https://pbs.twimg.com/profile_images/1271521722945110016/AvKfKpLo_normal.jpg",
                "profile_banner_url": "https://pbs.twimg.com/profile_banners/96479162/1599303392",
                "description": "Data Scientist | Software Engineer",
                "external_url": "https://t.co/Bqg9bJElJ2",
                "number_of_tweets": 3176,
                "bot": false,
                "timestamp": 1260676341,
                "has_nft_avatar": false,
                "category": null,
                "default_profile": false,
                "default_profile_image": false,
                "listed_count": 11,
                "verified_type": null
            },
            "language": "en",
            "favorite_count": 0,
            "retweet_count": 468,
            "reply_count": 0,
            "quote_count": 0,
            "retweet": true,
            "views": null,
            "timestamp": 1681508681,
            "video_view_count": null,
            "in_reply_to_status_id": null,
            "quoted_status_id": null,
            "binding_values": null,
            "expanded_url": null,
            "retweet_tweet_id": "1646509271843225600",
            "extended_entities": null,
            "conversation_id": "1646992900851396609",
            "retweet_status": {
                "tweet_id": "1646509271843225600",
                "creation_date": "Thu Apr 13 13:42:55 +0000 2023",
                "text": "How does a Large Language Model like ChatGPT actually work?\n\nWell, they are both amazingly simple and exceedingly complex at the same time.\n\nHold on to your butts, this is a deep dive ↓ https://t.co/s4j8SLbTv2",
                "media_url": [
                    "https://pbs.twimg.com/tweet_video_thumb/FtmTbl1acAEbE_J.jpg"
                ],
                "video_url": null,
                "user": {
                    "creation_date": "Mon Sep 28 07:41:04 +0000 2009",
                    "user_id": "77954485",
                    "username": "DanHollick",
                    "name": "Dan Hollick",
                    "follower_count": 20343,
                    "following_count": 313,
                    "favourites_count": 10374,
                    "is_private": false,
                    "is_verified": false,
                    "is_blue_verified": true,
                    "location": "JHB → OSL→ LDN ",
                    "profile_pic_url": "https://pbs.twimg.com/profile_images/1617190243454550016/f2azHnFh_normal.jpg",
                    "profile_banner_url": "https://pbs.twimg.com/profile_banners/77954485/1581577842",
                    "description": "design @raycastapp - tweets about design systems and tools.                                   \n\nFramer course: https://t.co/lFljxmqs6M",
                    "external_url": "https://t.co/p9CdcTaE0m",
                    "number_of_tweets": 4333,
                    "bot": false,
                    "timestamp": 1254123664,
                    "has_nft_avatar": false,
                    "category": null,
                    "default_profile": false,
                    "default_profile_image": false,
                    "listed_count": 437,
                    "verified_type": null
                },
                "language": "en",
                "favorite_count": 2834,
                "retweet_count": 468,
                "reply_count": 51,
                "quote_count": 70,
                "retweet": false,
                "views": 1644257,
                "timestamp": 1681393375,
                "video_view_count": null,
                "in_reply_to_status_id": null,
                "quoted_status_id": null,
                "binding_values": null,
                "expanded_url": null,
                "retweet_tweet_id": null,
                "extended_entities": {
                    "media": [
                        {
                            "display_url": "pic.twitter.com/s4j8SLbTv2",
                            "expanded_url": "https://twitter.com/DanHollick/status/1646509271843225600/photo/1",
                            "id_str": "1646509241002520577",
                            "indices": [
                                186,
                                209
                            ],
                            "media_key": "16_1646509241002520577",
                            "media_url_https": "https://pbs.twimg.com/tweet_video_thumb/FtmTbl1acAEbE_J.jpg",
                            "type": "animated_gif",
                            "url": "https://t.co/s4j8SLbTv2",
                            "ext_media_availability": {
                                "status": "Available"
                            },
                            "sizes": {
                                "large": {
                                    "h": 948,
                                    "w": 1500,
                                    "resize": "fit"
                                },
                                "medium": {
                                    "h": 758,
                                    "w": 1200,
                                    "resize": "fit"
                                },
                                "small": {
                                    "h": 430,
                                    "w": 680,
                                    "resize": "fit"
                                },
                                "thumb": {
                                    "h": 150,
                                    "w": 150,
                                    "resize": "crop"
                                }
                            },
                            "original_info": {
                                "height": 948,
                                "width": 1500,
                                "focus_rects": []
                            },
                            "video_info": {
                                "aspect_ratio": [
                                    125,
                                    79
                                ],
                                "variants": [
                                    {
                                        "bitrate": 0,
                                        "content_type": "video/mp4",
                                        "url": "https://video.twimg.com/tweet_video/FtmTbl1acAEbE_J.mp4"
                                    }
                                ]
                            }
                        }
                    ]
                },
                "conversation_id": "1646509271843225600",
                "retweet_status": null,
                "quoted_status": null,
                "bookmark_count": 4599,
                "source": "Typefully",
                "community_note": null
            },
            "quoted_status": null,
            "bookmark_count": 0,
            "source": "Twitter for iPhone",
            "community_note": null
        },
        {
            "tweet_id": "1619711691515899906",
            "creation_date": "Sun Jan 29 14:58:54 +0000 2023",
            "text": "https://t.co/tb9zX3GfBc",
            "media_url": null,
            "video_url": null,
            "user": {
                "creation_date": "Sun Dec 13 03:52:21 +0000 2009",
                "user_id": "96479162",
                "username": "omarmhaimdat",
                "name": "Omar MHAIMDAT",
                "follower_count": 964,
                "following_count": 1348,
                "favourites_count": 7101,
                "is_private": false,
                "is_verified": false,
                "is_blue_verified": true,
                "location": "Casablanca, Morocco",
                "profile_pic_url": "https://pbs.twimg.com/profile_images/1271521722945110016/AvKfKpLo_normal.jpg",
                "profile_banner_url": "https://pbs.twimg.com/profile_banners/96479162/1599303392",
                "description": "Data Scientist | Software Engineer",
                "external_url": "https://t.co/Bqg9bJElJ2",
                "number_of_tweets": 3176,
                "bot": false,
                "timestamp": 1260676341,
                "has_nft_avatar": false,
                "category": null,
                "default_profile": false,
                "default_profile_image": false,
                "listed_count": 11,
                "verified_type": null
            },
            "language": "zxx",
            "favorite_count": 0,
            "retweet_count": 0,
            "reply_count": 0,
            "quote_count": 1,
            "retweet": false,
            "views": 287,
            "timestamp": 1675004334,
            "video_view_count": null,
            "in_reply_to_status_id": "1619711572947128320",
            "quoted_status_id": null,
            "binding_values": [
                {
                    "key": "description",
                    "value": {
                        "string_value": "Python Binding for Rust WhatLang, a language detection library - omarmhaimdat/whatlang-pyo3",
                        "type": "STRING"
                    }
                },
                {
                    "key": "domain",
                    "value": {
                        "string_value": "github.com",
                        "type": "STRING"
                    }
                },
                {
                    "key": "site",
                    "value": {
                        "scribe_key": "publisher_id",
                        "type": "USER",
                        "user_value": {
                            "id_str": "13334762",
                            "path": []
                        }
                    }
                },
                {
                    "key": "photo_image_full_size_alt_text",
                    "value": {
                        "string_value": "Python Binding for Rust WhatLang, a language detection library - omarmhaimdat/whatlang-pyo3",
                        "type": "STRING"
                    }
                },
                {
                    "key": "vanity_url",
                    "value": {
                        "scribe_key": "vanity_url",
                        "string_value": "github.com",
                        "type": "STRING"
                    }
                },
                {
                    "key": "summary_photo_image_alt_text",
                    "value": {
                        "string_value": "Python Binding for Rust WhatLang, a language detection library - omarmhaimdat/whatlang-pyo3",
                        "type": "STRING"
                    }
                },
                {
                    "key": "title",
                    "value": {
                        "string_value": "GitHub - omarmhaimdat/whatlang-pyo3: Python Binding for Rust WhatLang, a language detection library",
                        "type": "STRING"
                    }
                },
                {
                    "key": "card_url",
                    "value": {
                        "scribe_key": "card_url",
                        "string_value": "https://t.co/tb9zX3GfBc",
                        "type": "STRING"
                    }
                }
            ],
            "expanded_url": "https://github.com/omarmhaimdat/whatlang-pyo3",
            "retweet_tweet_id": null,
            "extended_entities": null,
            "conversation_id": "1619711572947128320",
            "retweet_status": null,
            "quoted_status": null,
            "bookmark_count": 0,
            "source": "Twitter for Mac",
            "community_note": null
        },
        {
            "tweet_id": "1619711572947128320",
            "creation_date": "Sun Jan 29 14:58:26 +0000 2023",
            "text": "🚀 Whatlang-pyo3 v0.5.0 | 𝐁𝐚𝐭𝐜𝐡 𝐃𝐞𝐭𝐞𝐜𝐭𝐢𝐨𝐧 🤩\n\nAnnouncing batch detection for text language detection using python with the performance of Rust.\n\nIt can be up to 5x 𝐟𝐚𝐬𝐭𝐞𝐫 due to the lack of data and call overheads https://t.co/aSUaZD7Go8",
            "media_url": [
                "https://pbs.twimg.com/tweet_video_thumb/FnpfE9DXgAEDfsk.jpg"
            ],
            "video_url": null,
            "user": {
                "creation_date": "Sun Dec 13 03:52:21 +0000 2009",
                "user_id": "96479162",
                "username": "omarmhaimdat",
                "name": "Omar MHAIMDAT",
                "follower_count": 964,
                "following_count": 1348,
                "favourites_count": 7101,
                "is_private": false,
                "is_verified": false,
                "is_blue_verified": true,
                "location": "Casablanca, Morocco",
                "profile_pic_url": "https://pbs.twimg.com/profile_images/1271521722945110016/AvKfKpLo_normal.jpg",
                "profile_banner_url": "https://pbs.twimg.com/profile_banners/96479162/1599303392",
                "description": "Data Scientist | Software Engineer",
                "external_url": "https://t.co/Bqg9bJElJ2",
                "number_of_tweets": 3176,
                "bot": false,
                "timestamp": 1260676341,
                "has_nft_avatar": false,
                "category": null,
                "default_profile": false,
                "default_profile_image": false,
                "listed_count": 11,
                "verified_type": null
            },
            "language": "en",
            "favorite_count": 3,
            "retweet_count": 1,
            "reply_count": 2,
            "quote_count": 0,
            "retweet": false,
            "views": 348,
            "timestamp": 1675004306,
            "video_view_count": null,
            "in_reply_to_status_id": null,
            "quoted_status_id": null,
            "binding_values": null,
            "expanded_url": null,
            "retweet_tweet_id": null,
            "extended_entities": {
                "media": [
                    {
                        "display_url": "pic.twitter.com/aSUaZD7Go8",
                        "expanded_url": "https://twitter.com/omarmhaimdat/status/1619711572947128320/photo/1",
                        "id_str": "1619711554705915905",
                        "indices": [
                            212,
                            235
                        ],
                        "media_key": "16_1619711554705915905",
                        "media_url_https": "https://pbs.twimg.com/tweet_video_thumb/FnpfE9DXgAEDfsk.jpg",
                        "type": "animated_gif",
                        "url": "https://t.co/aSUaZD7Go8",
                        "ext_media_availability": {
                            "status": "Available"
                        },
                        "sizes": {
                            "large": {
                                "h": 892,
                                "w": 1510,
                                "resize": "fit"
                            },
                            "medium": {
                                "h": 709,
                                "w": 1200,
                                "resize": "fit"
                            },
                            "small": {
                                "h": 402,
                                "w": 680,
                                "resize": "fit"
                            },
                            "thumb": {
                                "h": 150,
                                "w": 150,
                                "resize": "crop"
                            }
                        },
                        "original_info": {
                            "height": 892,
                            "width": 1510,
                            "focus_rects": []
                        },
                        "video_info": {
                            "aspect_ratio": [
                                755,
                                446
                            ],
                            "variants": [
                                {
                                    "bitrate": 0,
                                    "content_type": "video/mp4",
                                    "url": "https://video.twimg.com/tweet_video/FnpfE9DXgAEDfsk.mp4"
                                }
                            ]
                        }
                    }
                ]
            },
            "conversation_id": "1619711572947128320",
            "retweet_status": null,
            "quoted_status": null,
            "bookmark_count": 0,
            "source": "Twitter for Mac",
            "community_note": null
        },
        {
            "tweet_id": "1609522402735652865",
            "creation_date": "Sun Jan 01 12:10:18 +0000 2023",
            "text": "Imagine you switch from FastAPI to actix-web (#rustlang) to discover it has some serious memory leaks 😞.  2023 will be fun 🥳",
            "media_url": null,
            "video_url": null,
            "user": {
                "creation_date": "Sun Dec 13 03:52:21 +0000 2009",
                "user_id": "96479162",
                "username": "omarmhaimdat",
                "name": "Omar MHAIMDAT",
                "follower_count": 964,
                "following_count": 1348,
                "favourites_count": 7101,
                "is_private": false,
                "is_verified": false,
                "is_blue_verified": true,
                "location": "Casablanca, Morocco",
                "profile_pic_url": "https://pbs.twimg.com/profile_images/1271521722945110016/AvKfKpLo_normal.jpg",
                "profile_banner_url": "https://pbs.twimg.com/profile_banners/96479162/1599303392",
                "description": "Data Scientist | Software Engineer",
                "external_url": "https://t.co/Bqg9bJElJ2",
                "number_of_tweets": 3176,
                "bot": false,
                "timestamp": 1260676341,
                "has_nft_avatar": false,
                "category": null,
                "default_profile": false,
                "default_profile_image": false,
                "listed_count": 11,
                "verified_type": null
            },
            "language": "en",
            "favorite_count": 0,
            "retweet_count": 1,
            "reply_count": 1,
            "quote_count": 0,
            "retweet": false,
            "views": 355,
            "timestamp": 1672575018,
            "video_view_count": null,
            "in_reply_to_status_id": null,
            "quoted_status_id": null,
            "binding_values": null,
            "expanded_url": null,
            "retweet_tweet_id": null,
            "extended_entities": null,
            "conversation_id": "1609522402735652865",
            "retweet_status": null,
            "quoted_status": null,
            "bookmark_count": 0,
            "source": "Twitter for iPhone",
            "community_note": null
        },
        {
            "tweet_id": "1609414546816393217",
            "creation_date": "Sun Jan 01 05:01:44 +0000 2023",
            "text": "Happy New Year! All the best!",
            "media_url": null,
            "video_url": null,
            "user": {
                "creation_date": "Sun Dec 13 03:52:21 +0000 2009",
                "user_id": "96479162",
                "username": "omarmhaimdat",
                "name": "Omar MHAIMDAT",
                "follower_count": 964,
                "following_count": 1348,
                "favourites_count": 7101,
                "is_private": false,
                "is_verified": false,
                "is_blue_verified": true,
                "location": "Casablanca, Morocco",
                "profile_pic_url": "https://pbs.twimg.com/profile_images/1271521722945110016/AvKfKpLo_normal.jpg",
                "profile_banner_url": "https://pbs.twimg.com/profile_banners/96479162/1599303392",
                "description": "Data Scientist | Software Engineer",
                "external_url": "https://t.co/Bqg9bJElJ2",
                "number_of_tweets": 3176,
                "bot": false,
                "timestamp": 1260676341,
                "has_nft_avatar": false,
                "category": null,
                "default_profile": false,
                "default_profile_image": false,
                "listed_count": 11,
                "verified_type": null
            },
            "language": "en",
            "favorite_count": 0,
            "retweet_count": 0,
            "reply_count": 0,
            "quote_count": 0,
            "retweet": false,
            "views": 180,
            "timestamp": 1672549304,
            "video_view_count": null,
            "in_reply_to_status_id": null,
            "quoted_status_id": null,
            "binding_values": null,
            "expanded_url": null,
            "retweet_tweet_id": null,
            "extended_entities": null,
            "conversation_id": "1609414546816393217",
            "retweet_status": null,
            "quoted_status": null,
            "bookmark_count": 0,
            "source": "IFTTT",
            "community_note": null
        },
        {
            "tweet_id": "1602648640149147648",
            "creation_date": "Tue Dec 13 12:56:26 +0000 2022",
            "text": "RT @cwolferesearch: Large Language Models (LLMs) work great when applied to language, but what happens when you pre-train them over other s…",
            "media_url": null,
            "video_url": null,
            "user": {
                "creation_date": "Sun Dec 13 03:52:21 +0000 2009",
                "user_id": "96479162",
                "username": "omarmhaimdat",
                "name": "Omar MHAIMDAT",
                "follower_count": 964,
                "following_count": 1348,
                "favourites_count": 7101,
                "is_private": false,
                "is_verified": false,
                "is_blue_verified": true,
                "location": "Casablanca, Morocco",
                "profile_pic_url": "https://pbs.twimg.com/profile_images/1271521722945110016/AvKfKpLo_normal.jpg",
                "profile_banner_url": "https://pbs.twimg.com/profile_banners/96479162/1599303392",
                "description": "Data Scientist | Software Engineer",
                "external_url": "https://t.co/Bqg9bJElJ2",
                "number_of_tweets": 3176,
                "bot": false,
                "timestamp": 1260676341,
                "has_nft_avatar": false,
                "category": null,
                "default_profile": false,
                "default_profile_image": false,
                "listed_count": 11,
                "verified_type": null
            },
            "language": "en",
            "favorite_count": 0,
            "retweet_count": 51,
            "reply_count": 0,
            "quote_count": 0,
            "retweet": true,
            "views": null,
            "timestamp": 1670936186,
            "video_view_count": null,
            "in_reply_to_status_id": null,
            "quoted_status_id": null,
            "binding_values": null,
            "expanded_url": null,
            "retweet_tweet_id": "1602413967171022848",
            "extended_entities": null,
            "conversation_id": "1602648640149147648",
            "retweet_status": {
                "tweet_id": "1602413967171022848",
                "creation_date": "Mon Dec 12 21:23:55 +0000 2022",
                "text": "Large Language Models (LLMs) work great when applied to language, but what happens when you pre-train them over other sources of public data like code repos on GitHub? You get powerful code completion tools like Codex, the model behind GitHub Copilot. 🧵[1/7]",
                "media_url": null,
                "video_url": null,
                "user": {
                    "creation_date": "Wed Aug 11 22:32:35 +0000 2021",
                    "user_id": "1425585940542763010",
                    "username": "cwolferesearch",
                    "name": "Cameron R. Wolfe, Ph.D.",
                    "follower_count": 22556,
                    "following_count": 633,
                    "favourites_count": 7363,
                    "is_private": false,
                    "is_verified": false,
                    "is_blue_verified": true,
                    "location": "",
                    "profile_pic_url": "https://pbs.twimg.com/profile_images/1715212547215802368/tqxfSqh3_normal.jpg",
                    "profile_banner_url": "https://pbs.twimg.com/profile_banners/1425585940542763010/1695596135",
                    "description": "ML @Netflix • Writer @ Deep (Learning) Focus • PhD @optimalab1 • I make AI understandable",
                    "external_url": "https://t.co/j75fAdLpp8",
                    "number_of_tweets": 3505,
                    "bot": false,
                    "timestamp": 1628721155,
                    "has_nft_avatar": false,
                    "category": {
                        "id": 713,
                        "name": "Science & Technology"
                    },
                    "default_profile": true,
                    "default_profile_image": false,
                    "listed_count": 630,
                    "verified_type": null
                },
                "language": "en",
                "favorite_count": 318,
                "retweet_count": 51,
                "reply_count": 4,
                "quote_count": 2,
                "retweet": false,
                "views": null,
                "timestamp": 1670880235,
                "video_view_count": null,
                "in_reply_to_status_id": null,
                "quoted_status_id": null,
                "binding_values": null,
                "expanded_url": null,
                "retweet_tweet_id": null,
                "extended_entities": null,
                "conversation_id": "1602413967171022848",
                "retweet_status": null,
                "quoted_status": null,
                "bookmark_count": 156,
                "source": "Twitter Web App",
                "community_note": null
            },
            "quoted_status": null,
            "bookmark_count": 0,
            "source": "Twitter for iPhone",
            "community_note": null
        },
        {
            "tweet_id": "1600382718071685120",
            "creation_date": "Wed Dec 07 06:52:28 +0000 2022",
            "text": "RT @s_scardapane: *The Forward-Forward Algorithm*\n\nFor those who missed #NeurIPS, @geoffreyhinton is now investigating a possible alternati…",
            "media_url": null,
            "video_url": null,
            "user": {
                "creation_date": "Sun Dec 13 03:52:21 +0000 2009",
                "user_id": "96479162",
                "username": "omarmhaimdat",
                "name": "Omar MHAIMDAT",
                "follower_count": 964,
                "following_count": 1348,
                "favourites_count": 7101,
                "is_private": false,
                "is_verified": false,
                "is_blue_verified": true,
                "location": "Casablanca, Morocco",
                "profile_pic_url": "https://pbs.twimg.com/profile_images/1271521722945110016/AvKfKpLo_normal.jpg",
                "profile_banner_url": "https://pbs.twimg.com/profile_banners/96479162/1599303392",
                "description": "Data Scientist | Software Engineer",
                "external_url": "https://t.co/Bqg9bJElJ2",
                "number_of_tweets": 3176,
                "bot": false,
                "timestamp": 1260676341,
                "has_nft_avatar": false,
                "category": null,
                "default_profile": false,
                "default_profile_image": false,
                "listed_count": 11,
                "verified_type": null
            },
            "language": "en",
            "favorite_count": 0,
            "retweet_count": 25,
            "reply_count": 0,
            "quote_count": 0,
            "retweet": true,
            "views": null,
            "timestamp": 1670395948,
            "video_view_count": null,
            "in_reply_to_status_id": null,
            "quoted_status_id": null,
            "binding_values": null,
            "expanded_url": null,
            "retweet_tweet_id": "1600086295509803008",
            "extended_entities": null,
            "conversation_id": "1600382718071685120",
            "retweet_status": {
                "tweet_id": "1600086295509803008",
                "creation_date": "Tue Dec 06 11:14:35 +0000 2022",
                "text": "*The Forward-Forward Algorithm*\n\nFor those who missed #NeurIPS, @geoffreyhinton is now investigating a possible alternative to backprop, \"forward-forward\".\n\nIn a nutshell: maximize activation of all neurons on \"real\" data, minimize on \"fake\" data.\n\n1/n\n\nhttps://t.co/2RefN9m7Pn https://t.co/B0iezhZVH2",
                "media_url": [
                    "https://pbs.twimg.com/media/FjSlX2YXoAAAZUL.jpg"
                ],
                "video_url": null,
                "user": {
                    "creation_date": "Wed Mar 04 14:09:51 +0000 2020",
                    "user_id": "1235205731747540993",
                    "username": "s_scardapane",
                    "name": "Simone Scardapane",
                    "follower_count": 8367,
                    "following_count": 671,
                    "favourites_count": 1948,
                    "is_private": false,
                    "is_verified": false,
                    "is_blue_verified": false,
                    "location": "Roma (Italy)",
                    "profile_pic_url": "https://pbs.twimg.com/profile_images/1679966961524981761/a0ORHr1T_normal.jpg",
                    "profile_banner_url": "https://pbs.twimg.com/profile_banners/1235205731747540993/1588690889",
                    "description": "I fall in love with a new #machinelearning topic every month 🙄\nTenure-track Ass. Prof. @SapienzaRoma | Previously @iaml_it @SmarterPodcast | @GoogleDevExpert",
                    "external_url": "https://t.co/XuJMbSLkMi",
                    "number_of_tweets": 1436,
                    "bot": false,
                    "timestamp": 1583330991,
                    "has_nft_avatar": false,
                    "category": [],
                    "default_profile": true,
                    "default_profile_image": false,
                    "listed_count": 138,
                    "verified_type": null
                },
                "language": "en",
                "favorite_count": 186,
                "retweet_count": 25,
                "reply_count": 3,
                "quote_count": 1,
                "retweet": false,
                "views": null,
                "timestamp": 1670325275,
                "video_view_count": null,
                "in_reply_to_status_id": null,
                "quoted_status_id": null,
                "binding_values": null,
                "expanded_url": "https://www.cs.toronto.edu/~hinton/FFA13.pdf",
                "retweet_tweet_id": null,
                "extended_entities": {
                    "media": [
                        {
                            "display_url": "pic.twitter.com/B0iezhZVH2",
                            "expanded_url": "https://twitter.com/s_scardapane/status/1600086295509803008/photo/1",
                            "id_str": "1600085596776669184",
                            "indices": [
                                278,
                                301
                            ],
                            "media_key": "3_1600085596776669184",
                            "media_url_https": "https://pbs.twimg.com/media/FjSlX2YXoAAAZUL.jpg",
                            "type": "photo",
                            "url": "https://t.co/B0iezhZVH2",
                            "ext_media_availability": {
                                "status": "Available"
                            },
                            "features": {
                                "large": {
                                    "faces": []
                                },
                                "medium": {
                                    "faces": []
                                },
                                "small": {
                                    "faces": []
                                },
                                "orig": {
                                    "faces": []
                                }
                            },
                            "sizes": {
                                "large": {
                                    "h": 460,
                                    "w": 1502,
                                    "resize": "fit"
                                },
                                "medium": {
                                    "h": 368,
                                    "w": 1200,
                                    "resize": "fit"
                                },
                                "small": {
                                    "h": 208,
                                    "w": 680,
                                    "resize": "fit"
                                },
                                "thumb": {
                                    "h": 150,
                                    "w": 150,
                                    "resize": "crop"
                                }
                            },
                            "original_info": {
                                "height": 460,
                                "width": 1502,
                                "focus_rects": [
                                    {
                                        "x": 228,
                                        "y": 0,
                                        "w": 821,
                                        "h": 460
                                    },
                                    {
                                        "x": 408,
                                        "y": 0,
                                        "w": 460,
                                        "h": 460
                                    },
                                    {
                                        "x": 436,
                                        "y": 0,
                                        "w": 404,
                                        "h": 460
                                    },
                                    {
                                        "x": 523,
                                        "y": 0,
                                        "w": 230,
                                        "h": 460
                                    },
                                    {
                                        "x": 0,
                                        "y": 0,
                                        "w": 1502,
                                        "h": 460
                                    }
                                ]
                            }
                        }
                    ]
                },
                "conversation_id": "1600086295509803008",
                "retweet_status": null,
                "quoted_status": null,
                "bookmark_count": 74,
                "source": "Twitter Web App",
                "community_note": null
            },
            "quoted_status": null,
            "bookmark_count": 0,
            "source": "Twitter for iPhone",
            "community_note": null
        },
        {
            "tweet_id": "1600168069300572173",
            "creation_date": "Tue Dec 06 16:39:32 +0000 2022",
            "text": "RT @karpathy: How long until we measure wealth inequality in FLOPS",
            "media_url": null,
            "video_url": null,
            "user": {
                "creation_date": "Sun Dec 13 03:52:21 +0000 2009",
                "user_id": "96479162",
                "username": "omarmhaimdat",
                "name": "Omar MHAIMDAT",
                "follower_count": 964,
                "following_count": 1348,
                "favourites_count": 7101,
                "is_private": false,
                "is_verified": false,
                "is_blue_verified": true,
                "location": "Casablanca, Morocco",
                "profile_pic_url": "https://pbs.twimg.com/profile_images/1271521722945110016/AvKfKpLo_normal.jpg",
                "profile_banner_url": "https://pbs.twimg.com/profile_banners/96479162/1599303392",
                "description": "Data Scientist | Software Engineer",
                "external_url": "https://t.co/Bqg9bJElJ2",
                "number_of_tweets": 3176,
                "bot": false,
                "timestamp": 1260676341,
                "has_nft_avatar": false,
                "category": null,
                "default_profile": false,
                "default_profile_image": false,
                "listed_count": 11,
                "verified_type": null
            },
            "language": "en",
            "favorite_count": 0,
            "retweet_count": 638,
            "reply_count": 0,
            "quote_count": 0,
            "retweet": true,
            "views": null,
            "timestamp": 1670344772,
            "video_view_count": null,
            "in_reply_to_status_id": null,
            "quoted_status_id": null,
            "binding_values": null,
            "expanded_url": null,
            "retweet_tweet_id": "1600012576825360384",
            "extended_entities": null,
            "conversation_id": "1600168069300572173",
            "retweet_status": {
                "tweet_id": "1600012576825360384",
                "creation_date": "Tue Dec 06 06:21:39 +0000 2022",
                "text": "How long until we measure wealth inequality in FLOPS",
                "media_url": null,
                "video_url": null,
                "user": {
                    "creation_date": "Tue Apr 21 06:49:15 +0000 2009",
                    "user_id": "33836629",
                    "username": "karpathy",
                    "name": "Andrej Karpathy",
                    "follower_count": 1012178,
                    "following_count": 922,
                    "favourites_count": 12144,
                    "is_private": false,
                    "is_verified": false,
                    "is_blue_verified": true,
                    "location": "Stanford",
                    "profile_pic_url": "https://pbs.twimg.com/profile_images/1296667294148382721/9Pr6XrPB_normal.jpg",
                    "profile_banner_url": "https://pbs.twimg.com/profile_banners/33836629/1407117611",
                    "description": "🧑‍🍳. Previously Director of AI @ Tesla, founding team @ OpenAI, CS231n/PhD @ Stanford. I like to train large deep neural nets 🧠🤖💥",
                    "external_url": "https://t.co/0EcFthjJXM",
                    "number_of_tweets": 8836,
                    "bot": false,
                    "timestamp": 1240296555,
                    "has_nft_avatar": false,
                    "category": null,
                    "default_profile": false,
                    "default_profile_image": false,
                    "listed_count": 13063,
                    "verified_type": null
                },
                "language": "en",
                "favorite_count": 11800,
                "retweet_count": 638,
                "reply_count": 349,
                "quote_count": 57,
                "retweet": false,
                "views": null,
                "timestamp": 1670307699,
                "video_view_count": null,
                "in_reply_to_status_id": null,
                "quoted_status_id": null,
                "binding_values": null,
                "expanded_url": null,
                "retweet_tweet_id": null,
                "extended_entities": null,
                "conversation_id": "1600012576825360384",
                "retweet_status": null,
                "quoted_status": null,
                "bookmark_count": 166,
                "source": "Twitter for iPhone",
                "community_note": null
            },
            "quoted_status": null,
            "bookmark_count": 0,
            "source": "Twitter for iPhone",
            "community_note": null
        },
        {
            "tweet_id": "1599485631004307457",
            "creation_date": "Sun Dec 04 19:27:46 +0000 2022",
            "text": "RT @ludwig_stumpp: Hey Twitter friends, I'm excited to share an evening project I recently completed - building a zero-shot captcha solver…",
            "media_url": null,
            "video_url": null,
            "user": {
                "creation_date": "Sun Dec 13 03:52:21 +0000 2009",
                "user_id": "96479162",
                "username": "omarmhaimdat",
                "name": "Omar MHAIMDAT",
                "follower_count": 964,
                "following_count": 1348,
                "favourites_count": 7101,
                "is_private": false,
                "is_verified": false,
                "is_blue_verified": true,
                "location": "Casablanca, Morocco",
                "profile_pic_url": "https://pbs.twimg.com/profile_images/1271521722945110016/AvKfKpLo_normal.jpg",
                "profile_banner_url": "https://pbs.twimg.com/profile_banners/96479162/1599303392",
                "description": "Data Scientist | Software Engineer",
                "external_url": "https://t.co/Bqg9bJElJ2",
                "number_of_tweets": 3176,
                "bot": false,
                "timestamp": 1260676341,
                "has_nft_avatar": false,
                "category": null,
                "default_profile": false,
                "default_profile_image": false,
                "listed_count": 11,
                "verified_type": null
            },
            "language": "en",
            "favorite_count": 0,
            "retweet_count": 9,
            "reply_count": 0,
            "quote_count": 0,
            "retweet": true,
            "views": null,
            "timestamp": 1670182066,
            "video_view_count": null,
            "in_reply_to_status_id": null,
            "quoted_status_id": null,
            "binding_values": null,
            "expanded_url": null,
            "retweet_tweet_id": "1599385298584031233",
            "extended_entities": null,
            "conversation_id": "1599485631004307457",
            "retweet_status": {
                "tweet_id": "1599385298584031233",
                "creation_date": "Sun Dec 04 12:49:04 +0000 2022",
                "text": "Hey Twitter friends, I'm excited to share an evening project I recently completed - building a zero-shot captcha solver using CLIP image and text embeddings!\n\nFind the demo at the end of this thread!\n\nDisclaimer:\nThis text was created with the help of ChatGPT\n\n[1 / 12] https://t.co/izAPTf3rU4",
                "media_url": [
                    "https://pbs.twimg.com/media/FjImgZ9WQAEuR9R.jpg"
                ],
                "video_url": null,
                "user": {
                    "creation_date": "Sat Apr 13 10:52:19 +0000 2019",
                    "user_id": "1117017666798198784",
                    "username": "ludwig_stumpp",
                    "name": "Ludwig Stumpp",
                    "follower_count": 1016,
                    "following_count": 338,
                    "favourites_count": 8948,
                    "is_private": false,
                    "is_verified": false,
                    "is_blue_verified": false,
                    "location": "Heilbronn, Germany",
                    "profile_pic_url": "https://pbs.twimg.com/profile_images/1435568253116555267/m5J6kCfz_normal.jpg",
                    "profile_banner_url": "https://pbs.twimg.com/profile_banners/1117017666798198784/1687037244",
                    "description": "AI Engineer. Building the largest EU AI ecosystem Heilbronn with appliedAI | Creator of the https://t.co/wVshcJyEp0.",
                    "external_url": "https://t.co/olmPMlQLos",
                    "number_of_tweets": 3367,
                    "bot": false,
                    "timestamp": 1555152739,
                    "has_nft_avatar": false,
                    "category": null,
                    "default_profile": false,
                    "default_profile_image": false,
                    "listed_count": 41,
                    "verified_type": null
                },
                "language": "en",
                "favorite_count": 31,
                "retweet_count": 9,
                "reply_count": 3,
                "quote_count": 2,
                "retweet": false,
                "views": null,
                "timestamp": 1670158144,
                "video_view_count": null,
                "in_reply_to_status_id": null,
                "quoted_status_id": null,
                "binding_values": null,
                "expanded_url": null,
                "retweet_tweet_id": null,
                "extended_entities": {
                    "media": [
                        {
                            "display_url": "pic.twitter.com/izAPTf3rU4",
                            "expanded_url": "https://twitter.com/ludwig_stumpp/status/1599385298584031233/photo/1",
                            "id_str": "1599383155835813889",
                            "indices": [
                                270,
                                293
                            ],
                            "media_key": "3_1599383155835813889",
                            "media_url_https": "https://pbs.twimg.com/media/FjImgZ9WQAEuR9R.jpg",
                            "type": "photo",
                            "url": "https://t.co/izAPTf3rU4",
                            "ext_media_availability": {
                                "status": "Available"
                            },
                            "features": {
                                "large": {
                                    "faces": []
                                },
                                "medium": {
                                    "faces": []
                                },
                                "small": {
                                    "faces": []
                                },
                                "orig": {
                                    "faces": []
                                }
                            },
                            "sizes": {
                                "large": {
                                    "h": 1628,
                                    "w": 958,
                                    "resize": "fit"
                                },
                                "medium": {
                                    "h": 1200,
                                    "w": 706,
                                    "resize": "fit"
                                },
                                "small": {
                                    "h": 680,
                                    "w": 400,
                                    "resize": "fit"
                                },
                                "thumb": {
                                    "h": 150,
                                    "w": 150,
                                    "resize": "crop"
                                }
                            },
                            "original_info": {
                                "height": 1628,
                                "width": 958,
                                "focus_rects": [
                                    {
                                        "x": 0,
                                        "y": 16,
                                        "w": 958,
                                        "h": 536
                                    },
                                    {
                                        "x": 0,
                                        "y": 0,
                                        "w": 958,
                                        "h": 958
                                    },
                                    {
                                        "x": 0,
                                        "y": 0,
                                        "w": 958,
                                        "h": 1092
                                    },
                                    {
                                        "x": 0,
                                        "y": 0,
                                        "w": 814,
                                        "h": 1628
                                    },
                                    {
                                        "x": 0,
                                        "y": 0,
                                        "w": 958,
                                        "h": 1628
                                    }
                                ]
                            }
                        }
                    ]
                },
                "conversation_id": "1599385298584031233",
                "retweet_status": null,
                "quoted_status": null,
                "bookmark_count": 8,
                "source": "Twitter Web App",
                "community_note": null
            },
            "quoted_status": null,
            "bookmark_count": 0,
            "source": "Twitter for iPhone",
            "community_note": null
        },
        {
            "tweet_id": "1599153739843051520",
            "creation_date": "Sat Dec 03 21:28:57 +0000 2022",
            "text": "RT @deliprao: Despite the amazing results I’ve experienced with ChatGPT, this is not a correct way to look at LLM vs. Google search. Since…",
            "media_url": null,
            "video_url": null,
            "user": {
                "creation_date": "Sun Dec 13 03:52:21 +0000 2009",
                "user_id": "96479162",
                "username": "omarmhaimdat",
                "name": "Omar MHAIMDAT",
                "follower_count": 964,
                "following_count": 1348,
                "favourites_count": 7101,
                "is_private": false,
                "is_verified": false,
                "is_blue_verified": true,
                "location": "Casablanca, Morocco",
                "profile_pic_url": "https://pbs.twimg.com/profile_images/1271521722945110016/AvKfKpLo_normal.jpg",
                "profile_banner_url": "https://pbs.twimg.com/profile_banners/96479162/1599303392",
                "description": "Data Scientist | Software Engineer",
                "external_url": "https://t.co/Bqg9bJElJ2",
                "number_of_tweets": 3176,
                "bot": false,
                "timestamp": 1260676341,
                "has_nft_avatar": false,
                "category": null,
                "default_profile": false,
                "default_profile_image": false,
                "listed_count": 11,
                "verified_type": null
            },
            "language": "en",
            "favorite_count": 0,
            "retweet_count": 46,
            "reply_count": 0,
            "quote_count": 0,
            "retweet": true,
            "views": null,
            "timestamp": 1670102937,
            "video_view_count": null,
            "in_reply_to_status_id": null,
            "quoted_status_id": "1598154943512596480",
            "binding_values": null,
            "expanded_url": null,
            "retweet_tweet_id": "1599098378172104704",
            "extended_entities": null,
            "conversation_id": "1599153739843051520",
            "retweet_status": {
                "tweet_id": "1599098378172104704",
                "creation_date": "Sat Dec 03 17:48:57 +0000 2022",
                "text": "Despite the amazing results I’ve experienced with ChatGPT, this is not a correct way to look at LLM vs. Google search. Since several other tweets have made this equivalence and have been eager to spell doom for Google, let’s examine the details:",
                "media_url": null,
                "video_url": null,
                "user": {
                    "creation_date": "Sun Oct 26 20:04:45 +0000 2008",
                    "user_id": "16984977",
                    "username": "deliprao",
                    "name": "Delip Rao e/σ",
                    "follower_count": 47830,
                    "following_count": 4967,
                    "favourites_count": 48137,
                    "is_private": false,
                    "is_verified": false,
                    "is_blue_verified": true,
                    "location": "NYC, 🇺🇸🇮🇳🇹🇼🏳️‍🌈",
                    "profile_pic_url": "https://pbs.twimg.com/profile_images/1521801057965264896/bo8B1BjJ_normal.jpg",
                    "profile_banner_url": "https://pbs.twimg.com/profile_banners/16984977/1689565678",
                    "description": "Busy inventing the shipwreck. @Penn. Past: @johnshopkins, @UCSC, @Amazon, @Twitter ||Art: #NLProc, Vision, Speech, #DeepLearning || Life: 道元, improv, running 🌈",
                    "external_url": "https://t.co/h4RGsXZ0jV",
                    "number_of_tweets": 51293,
                    "bot": false,
                    "timestamp": 1225051485,
                    "has_nft_avatar": false,
                    "category": {
                        "id": 713,
                        "name": "Science & Technology"
                    },
                    "default_profile": false,
                    "default_profile_image": false,
                    "listed_count": 912,
                    "verified_type": null
                },
                "language": "en",
                "favorite_count": 247,
                "retweet_count": 46,
                "reply_count": 10,
                "quote_count": 13,
                "retweet": false,
                "views": null,
                "timestamp": 1670089737,
                "video_view_count": null,
                "in_reply_to_status_id": null,
                "quoted_status_id": "1598154943512596480",
                "binding_values": null,
                "expanded_url": null,
                "retweet_tweet_id": null,
                "extended_entities": null,
                "conversation_id": "1599098378172104704",
                "retweet_status": null,
                "quoted_status": {
                    "tweet_id": "1598154943512596480",
                    "creation_date": "Thu Dec 01 03:20:05 +0000 2022",
                    "text": "ChatGPT is (a) remove login, (b) get a better name away from being the first serious Google search competitor in.. ever.",
                    "media_url": null,
                    "video_url": null,
                    "user": {
                        "creation_date": "Wed Jun 06 23:18:22 +0000 2007",
                        "user_id": "6629572",
                        "username": "jheitzeb",
                        "name": "Joe Heitzeberg",
                        "follower_count": 5009,
                        "following_count": 914,
                        "favourites_count": 5342,
                        "is_private": false,
                        "is_verified": false,
                        "is_blue_verified": true,
                        "location": "Seattle, WA",
                        "profile_pic_url": "https://pbs.twimg.com/profile_images/1569835396527456257/wVf2FVO0_normal.jpg",
                        "profile_banner_url": "https://pbs.twimg.com/profile_banners/6629572/1663113031",
                        "description": "AI Tinkerers global, co-founder of Crowd Cow, 2019 Allen School Alumni Impact Award, MIT, weekly 1:1 with my AI",
                        "external_url": "https://t.co/lzOf48lpyu",
                        "number_of_tweets": 7974,
                        "bot": false,
                        "timestamp": 1181171902,
                        "has_nft_avatar": false,
                        "category": null,
                        "default_profile": false,
                        "default_profile_image": false,
                        "listed_count": 216,
                        "verified_type": null
                    },
                    "language": "en",
                    "favorite_count": 80,
                    "retweet_count": 6,
                    "reply_count": 10,
                    "quote_count": 2,
                    "retweet": false,
                    "views": null,
                    "timestamp": 1669864805,
                    "video_view_count": null,
                    "in_reply_to_status_id": null,
                    "quoted_status_id": null,
                    "binding_values": null,
                    "expanded_url": null,
                    "retweet_tweet_id": null,
                    "extended_entities": null,
                    "conversation_id": "1598154943512596480",
                    "retweet_status": null,
                    "quoted_status": null,
                    "bookmark_count": 5,
                    "source": "Twitter for iPhone",
                    "community_note": null
                },
                "bookmark_count": 79,
                "source": "Twitter for iPhone",
                "community_note": null
            },
            "quoted_status": null,
            "bookmark_count": 0,
            "source": "Twitter for iPhone",
            "community_note": null
        },
        {
            "tweet_id": "1586838973309132801",
            "creation_date": "Sun Oct 30 21:54:27 +0000 2022",
            "text": "RT @omarmhaimdat: As part of my week-end project, I have created a Python binding for WhatLang. WhatLang is a Rust library for detecting th…",
            "media_url": null,
            "video_url": null,
            "user": {
                "creation_date": "Sun Dec 13 03:52:21 +0000 2009",
                "user_id": "96479162",
                "username": "omarmhaimdat",
                "name": "Omar MHAIMDAT",
                "follower_count": 964,
                "following_count": 1348,
                "favourites_count": 7101,
                "is_private": false,
                "is_verified": false,
                "is_blue_verified": true,
                "location": "Casablanca, Morocco",
                "profile_pic_url": "https://pbs.twimg.com/profile_images/1271521722945110016/AvKfKpLo_normal.jpg",
                "profile_banner_url": "https://pbs.twimg.com/profile_banners/96479162/1599303392",
                "description": "Data Scientist | Software Engineer",
                "external_url": "https://t.co/Bqg9bJElJ2",
                "number_of_tweets": 3176,
                "bot": false,
                "timestamp": 1260676341,
                "has_nft_avatar": false,
                "category": null,
                "default_profile": false,
                "default_profile_image": false,
                "listed_count": 11,
                "verified_type": null
            },
            "language": "en",
            "favorite_count": 0,
            "retweet_count": 1,
            "reply_count": 0,
            "quote_count": 0,
            "retweet": true,
            "views": null,
            "timestamp": 1667166867,
            "video_view_count": null,
            "in_reply_to_status_id": null,
            "quoted_status_id": null,
            "binding_values": null,
            "expanded_url": null,
            "retweet_tweet_id": "1579514658368561156",
            "extended_entities": null,
            "conversation_id": "1586838973309132801",
            "retweet_status": {
                "tweet_id": "1579514658368561156",
                "creation_date": "Mon Oct 10 16:50:15 +0000 2022",
                "text": "As part of my week-end project, I have created a Python binding for WhatLang. WhatLang is a Rust library for detecting the language of a text.\n\nPypi link: https://t.co/30PohAcmJ1\nGithub link: https://t.co/tb9zX3XiDc\n\nany contribution is appreciated. https://t.co/SXNoC13vrR",
                "media_url": [
                    "https://pbs.twimg.com/media/FeuQNQSX0AYWuBG.jpg"
                ],
                "video_url": null,
                "user": {
                    "creation_date": "Sun Dec 13 03:52:21 +0000 2009",
                    "user_id": "96479162",
                    "username": "omarmhaimdat",
                    "name": "Omar MHAIMDAT",
                    "follower_count": 964,
                    "following_count": 1348,
                    "favourites_count": 7101,
                    "is_private": false,
                    "is_verified": false,
                    "is_blue_verified": true,
                    "location": "Casablanca, Morocco",
                    "profile_pic_url": "https://pbs.twimg.com/profile_images/1271521722945110016/AvKfKpLo_normal.jpg",
                    "profile_banner_url": "https://pbs.twimg.com/profile_banners/96479162/1599303392",
                    "description": "Data Scientist | Software Engineer",
                    "external_url": "https://t.co/Bqg9bJElJ2",
                    "number_of_tweets": 3176,
                    "bot": false,
                    "timestamp": 1260676341,
                    "has_nft_avatar": false,
                    "category": null,
                    "default_profile": false,
                    "default_profile_image": false,
                    "listed_count": 11,
                    "verified_type": null
                },
                "language": "en",
                "favorite_count": 2,
                "retweet_count": 1,
                "reply_count": 0,
                "quote_count": 0,
                "retweet": false,
                "views": null,
                "timestamp": 1665420615,
                "video_view_count": null,
                "in_reply_to_status_id": null,
                "quoted_status_id": null,
                "binding_values": null,
                "expanded_url": "https://pypi.org/project/whatlang-pyo3/",
                "retweet_tweet_id": null,
                "extended_entities": {
                    "media": [
                        {
                            "display_url": "pic.twitter.com/SXNoC13vrR",
                            "expanded_url": "https://twitter.com/omarmhaimdat/status/1579514658368561156/photo/1",
                            "id_str": "1579514651708215302",
                            "indices": [
                                250,
                                273
                            ],
                            "media_key": "3_1579514651708215302",
                            "media_url_https": "https://pbs.twimg.com/media/FeuQNQSX0AYWuBG.jpg",
                            "type": "photo",
                            "url": "https://t.co/SXNoC13vrR",
                            "ext_media_availability": {
                                "status": "Available"
                            },
                            "features": {
                                "large": {
                                    "faces": []
                                },
                                "medium": {
                                    "faces": []
                                },
                                "small": {
                                    "faces": []
                                },
                                "orig": {
                                    "faces": []
                                }
                            },
                            "sizes": {
                                "large": {
                                    "h": 1272,
                                    "w": 2048,
                                    "resize": "fit"
                                },
                                "medium": {
                                    "h": 745,
                                    "w": 1200,
                                    "resize": "fit"
                                },
                                "small": {
                                    "h": 422,
                                    "w": 680,
                                    "resize": "fit"
                                },
                                "thumb": {
                                    "h": 150,
                                    "w": 150,
                                    "resize": "crop"
                                }
                            },
                            "original_info": {
                                "height": 2544,
                                "width": 4096,
                                "focus_rects": [
                                    {
                                        "x": 0,
                                        "y": 0,
                                        "w": 4096,
                                        "h": 2294
                                    },
                                    {
                                        "x": 776,
                                        "y": 0,
                                        "w": 2544,
                                        "h": 2544
                                    },
                                    {
                                        "x": 932,
                                        "y": 0,
                                        "w": 2232,
                                        "h": 2544
                                    },
                                    {
                                        "x": 1412,
                                        "y": 0,
                                        "w": 1272,
                                        "h": 2544
                                    },
                                    {
                                        "x": 0,
                                        "y": 0,
                                        "w": 4096,
                                        "h": 2544
                                    }
                                ]
                            }
                        }
                    ]
                },
                "conversation_id": "1579514658368561156",
                "retweet_status": null,
                "quoted_status": null,
                "bookmark_count": 1,
                "source": "Twitter for Mac",
                "community_note": null
            },
            "quoted_status": null,
            "bookmark_count": 0,
            "source": "Twitter for Mac",
            "community_note": null
        },
        {
            "tweet_id": "1583804340682526720",
            "creation_date": "Sat Oct 22 12:55:55 +0000 2022",
            "text": "RT @jarredsumner: Introducing Bun - an incredibly fast all-in-one JavaScript runtime. \n\nhttps://t.co/Yt6tAcnBQs",
            "media_url": null,
            "video_url": null,
            "user": {
                "creation_date": "Sun Dec 13 03:52:21 +0000 2009",
                "user_id": "96479162",
                "username": "omarmhaimdat",
                "name": "Omar MHAIMDAT",
                "follower_count": 964,
                "following_count": 1348,
                "favourites_count": 7101,
                "is_private": false,
                "is_verified": false,
                "is_blue_verified": true,
                "location": "Casablanca, Morocco",
                "profile_pic_url": "https://pbs.twimg.com/profile_images/1271521722945110016/AvKfKpLo_normal.jpg",
                "profile_banner_url": "https://pbs.twimg.com/profile_banners/96479162/1599303392",
                "description": "Data Scientist | Software Engineer",
                "external_url": "https://t.co/Bqg9bJElJ2",
                "number_of_tweets": 3176,
                "bot": false,
                "timestamp": 1260676341,
                "has_nft_avatar": false,
                "category": null,
                "default_profile": false,
                "default_profile_image": false,
                "listed_count": 11,
                "verified_type": null
            },
            "language": "en",
            "favorite_count": 0,
            "retweet_count": 1614,
            "reply_count": 0,
            "quote_count": 0,
            "retweet": true,
            "views": null,
            "timestamp": 1666443355,
            "video_view_count": null,
            "in_reply_to_status_id": null,
            "quoted_status_id": null,
            "binding_values": [
                {
                    "key": "photo_image_full_size_large",
                    "value": {
                        "image_value": {
                            "height": 419,
                            "width": 800,
                            "url": "https://pbs.twimg.com/card_img/1800137384060747776/iSuojub4?format=png&name=800x419"
                        },
                        "type": "IMAGE"
                    }
                },
                {
                    "key": "thumbnail_image",
                    "value": {
                        "image_value": {
                            "height": 146,
                            "width": 280,
                            "url": "https://pbs.twimg.com/card_img/1800137384060747776/iSuojub4?format=png&name=280x150"
                        },
                        "type": "IMAGE"
                    }
                },
                {
                    "key": "description",
                    "value": {
                        "string_value": "Bundle, install, and run JavaScript & TypeScript — all in Bun. Bun is a new JavaScript runtime with a native bundler, transpiler, task runner, and npm client built-in.",
                        "type": "STRING"
                    }
                },
                {
                    "key": "domain",
                    "value": {
                        "string_value": "bun.sh",
                        "type": "STRING"
                    }
                },
                {
                    "key": "thumbnail_image_large",
                    "value": {
                        "image_value": {
                            "height": 314,
                            "width": 600,
                            "url": "https://pbs.twimg.com/card_img/1800137384060747776/iSuojub4?format=png&name=600x600"
                        },
                        "type": "IMAGE"
                    }
                },
                {
                    "key": "summary_photo_image_small",
                    "value": {
                        "image_value": {
                            "height": 202,
                            "width": 386,
                            "url": "https://pbs.twimg.com/card_img/1800137384060747776/iSuojub4?format=png&name=386x202"
                        },
                        "type": "IMAGE"
                    }
                },
                {
                    "key": "thumbnail_image_original",
                    "value": {
                        "image_value": {
                            "height": 836,
                            "width": 1600,
                            "url": "https://pbs.twimg.com/card_img/1800137384060747776/iSuojub4?format=png&name=orig"
                        },
                        "type": "IMAGE"
                    }
                },
                {
                    "key": "site",
                    "value": {
                        "scribe_key": "publisher_id",
                        "type": "USER",
                        "user_value": {
                            "id_str": "1733090792229470208",
                            "path": []
                        }
                    }
                },
                {
                    "key": "photo_image_full_size_small",
                    "value": {
                        "image_value": {
                            "height": 202,
                            "width": 386,
                            "url": "https://pbs.twimg.com/card_img/1800137384060747776/iSuojub4?format=png&name=386x202"
                        },
                        "type": "IMAGE"
                    }
                },
                {
                    "key": "summary_photo_image_large",
                    "value": {
                        "image_value": {
                            "height": 419,
                            "width": 800,
                            "url": "https://pbs.twimg.com/card_img/1800137384060747776/iSuojub4?format=png&name=800x419"
                        },
                        "type": "IMAGE"
                    }
                },
                {
                    "key": "thumbnail_image_small",
                    "value": {
                        "image_value": {
                            "height": 75,
                            "width": 144,
                            "url": "https://pbs.twimg.com/card_img/1800137384060747776/iSuojub4?format=png&name=144x144"
                        },
                        "type": "IMAGE"
                    }
                },
                {
                    "key": "thumbnail_image_x_large",
                    "value": {
                        "image_value": {
                            "height": 836,
                            "width": 1600,
                            "url": "https://pbs.twimg.com/card_img/1800137384060747776/iSuojub4?format=png&name=2048x2048_2_exp"
                        },
                        "type": "IMAGE"
                    }
                },
                {
                    "key": "photo_image_full_size_original",
                    "value": {
                        "image_value": {
                            "height": 836,
                            "width": 1600,
                            "url": "https://pbs.twimg.com/card_img/1800137384060747776/iSuojub4?format=png&name=orig"
                        },
                        "type": "IMAGE"
                    }
                },
                {
                    "key": "vanity_url",
                    "value": {
                        "scribe_key": "vanity_url",
                        "string_value": "bun.sh",
                        "type": "STRING"
                    }
                },
                {
                    "key": "photo_image_full_size",
                    "value": {
                        "image_value": {
                            "height": 314,
                            "width": 600,
                            "url": "https://pbs.twimg.com/card_img/1800137384060747776/iSuojub4?format=png&name=600x314"
                        },
                        "type": "IMAGE"
                    }
                },
                {
                    "key": "thumbnail_image_color",
                    "value": {
                        "image_color_value": {
                            "palette": [
                                {
                                    "rgb": {
                                        "blue": 18,
                                        "green": 16,
                                        "red": 15
                                    },
                                    "percentage": 91.87
                                },
                                {
                                    "rgb": {
                                        "blue": 179,
                                        "green": 181,
                                        "red": 183
                                    },
                                    "percentage": 5.24
                                },
                                {
                                    "rgb": {
                                        "blue": 122,
                                        "green": 125,
                                        "red": 129
                                    },
                                    "percentage": 0.3
                                }
                            ]
                        },
                        "type": "IMAGE_COLOR"
                    }
                },
                {
                    "key": "title",
                    "value": {
                        "string_value": "Bun — A fast all-in-one JavaScript runtime",
                        "type": "STRING"
                    }
                },
                {
                    "key": "summary_photo_image_color",
                    "value": {
                        "image_color_value": {
                            "palette": [
                                {
                                    "rgb": {
                                        "blue": 18,
                                        "green": 16,
                                        "red": 15
                                    },
                                    "percentage": 91.87
                                },
                                {
                                    "rgb": {
                                        "blue": 179,
                                        "green": 181,
                                        "red": 183
                                    },
                                    "percentage": 5.24
                                },
                                {
                                    "rgb": {
                                        "blue": 122,
                                        "green": 125,
                                        "red": 129
                                    },
                                    "percentage": 0.3
                                }
                            ]
                        },
                        "type": "IMAGE_COLOR"
                    }
                },
                {
                    "key": "summary_photo_image_x_large",
                    "value": {
                        "image_value": {
                            "height": 836,
                            "width": 1600,
                            "url": "https://pbs.twimg.com/card_img/1800137384060747776/iSuojub4?format=png&name=2048x2048_2_exp"
                        },
                        "type": "IMAGE"
                    }
                },
                {
                    "key": "summary_photo_image",
                    "value": {
                        "image_value": {
                            "height": 314,
                            "width": 600,
                            "url": "https://pbs.twimg.com/card_img/1800137384060747776/iSuojub4?format=png&name=600x314"
                        },
                        "type": "IMAGE"
                    }
                },
                {
                    "key": "photo_image_full_size_color",
                    "value": {
                        "image_color_value": {
                            "palette": [
                                {
                                    "rgb": {
                                        "blue": 18,
                                        "green": 16,
                                        "red": 15
                                    },
                                    "percentage": 91.87
                                },
                                {
                                    "rgb": {
                                        "blue": 179,
                                        "green": 181,
                                        "red": 183
                                    },
                                    "percentage": 5.24
                                },
                                {
                                    "rgb": {
                                        "blue": 122,
                                        "green": 125,
                                        "red": 129
                                    },
                                    "percentage": 0.3
                                }
                            ]
                        },
                        "type": "IMAGE_COLOR"
                    }
                },
                {
                    "key": "photo_image_full_size_x_large",
                    "value": {
                        "image_value": {
                            "height": 836,
                            "width": 1600,
                            "url": "https://pbs.twimg.com/card_img/1800137384060747776/iSuojub4?format=png&name=2048x2048_2_exp"
                        },
                        "type": "IMAGE"
                    }
                },
                {
                    "key": "card_url",
                    "value": {
                        "scribe_key": "card_url",
                        "string_value": "https://t.co/Yt6tAcnBQs",
                        "type": "STRING"
                    }
                },
                {
                    "key": "summary_photo_image_original",
                    "value": {
                        "image_value": {
                            "height": 836,
                            "width": 1600,
                            "url": "https://pbs.twimg.com/card_img/1800137384060747776/iSuojub4?format=png&name=orig"
                        },
                        "type": "IMAGE"
                    }
                }
            ],
            "expanded_url": "https://bun.sh/",
            "retweet_tweet_id": "1544460933753229312",
            "extended_entities": null,
            "conversation_id": "1583804340682526720",
            "retweet_status": {
                "tweet_id": "1544460933753229312",
                "creation_date": "Tue Jul 05 23:19:15 +0000 2022",
                "text": "Introducing Bun - an incredibly fast all-in-one JavaScript runtime. \n\nhttps://t.co/Yt6tAcnBQs",
                "media_url": null,
                "video_url": null,
                "user": {
                    "creation_date": "Sun May 11 07:12:54 +0000 2014",
                    "user_id": "2489440172",
                    "username": "jarredsumner",
                    "name": "Jarred Sumner",
                    "follower_count": 98708,
                    "following_count": 785,
                    "favourites_count": 22395,
                    "is_private": false,
                    "is_verified": false,
                    "is_blue_verified": true,
                    "location": "San Francisco, CA",
                    "profile_pic_url": "https://pbs.twimg.com/profile_images/1342417825483300864/Vz4ChOFG_normal.jpg",
                    "profile_banner_url": null,
                    "description": "building @bunjavascript. formerly: @stripe (twice) @thielfellowship. high school dropout. npm i -g bun",
                    "external_url": "https://t.co/P0WCJxNFbC",
                    "number_of_tweets": 20928,
                    "bot": false,
                    "timestamp": 1399792374,
                    "has_nft_avatar": false,
                    "category": null,
                    "default_profile": true,
                    "default_profile_image": false,
                    "listed_count": 617,
                    "verified_type": null
                },
                "language": "en",
                "favorite_count": 7651,
                "retweet_count": 1614,
                "reply_count": 240,
                "quote_count": 359,
                "retweet": false,
                "views": null,
                "timestamp": 1657063155,
                "video_view_count": null,
                "in_reply_to_status_id": null,
                "quoted_status_id": null,
                "binding_values": [
                    {
                        "key": "photo_image_full_size_large",
                        "value": {
                            "image_value": {
                                "height": 419,
                                "width": 800,
                                "url": "https://pbs.twimg.com/card_img/1800137384060747776/iSuojub4?format=png&name=800x419"
                            },
                            "type": "IMAGE"
                        }
                    },
                    {
                        "key": "thumbnail_image",
                        "value": {
                            "image_value": {
                                "height": 146,
                                "width": 280,
                                "url": "https://pbs.twimg.com/card_img/1800137384060747776/iSuojub4?format=png&name=280x150"
                            },
                            "type": "IMAGE"
                        }
                    },
                    {
                        "key": "description",
                        "value": {
                            "string_value": "Bundle, install, and run JavaScript & TypeScript — all in Bun. Bun is a new JavaScript runtime with a native bundler, transpiler, task runner, and npm client built-in.",
                            "type": "STRING"
                        }
                    },
                    {
                        "key": "domain",
                        "value": {
                            "string_value": "bun.sh",
                            "type": "STRING"
                        }
                    },
                    {
                        "key": "thumbnail_image_large",
                        "value": {
                            "image_value": {
                                "height": 314,
                                "width": 600,
                                "url": "https://pbs.twimg.com/card_img/1800137384060747776/iSuojub4?format=png&name=600x600"
                            },
                            "type": "IMAGE"
                        }
                    },
                    {
                        "key": "summary_photo_image_small",
                        "value": {
                            "image_value": {
                                "height": 202,
                                "width": 386,
                                "url": "https://pbs.twimg.com/card_img/1800137384060747776/iSuojub4?format=png&name=386x202"
                            },
                            "type": "IMAGE"
                        }
                    },
                    {
                        "key": "thumbnail_image_original",
                        "value": {
                            "image_value": {
                                "height": 836,
                                "width": 1600,
                                "url": "https://pbs.twimg.com/card_img/1800137384060747776/iSuojub4?format=png&name=orig"
                            },
                            "type": "IMAGE"
                        }
                    },
                    {
                        "key": "site",
                        "value": {
                            "scribe_key": "publisher_id",
                            "type": "USER",
                            "user_value": {
                                "id_str": "1733090792229470208",
                                "path": []
                            }
                        }
                    },
                    {
                        "key": "photo_image_full_size_small",
                        "value": {
                            "image_value": {
                                "height": 202,
                                "width": 386,
                                "url": "https://pbs.twimg.com/card_img/1800137384060747776/iSuojub4?format=png&name=386x202"
                            },
                            "type": "IMAGE"
                        }
                    },
                    {
                        "key": "summary_photo_image_large",
                        "value": {
                            "image_value": {
                                "height": 419,
                                "width": 800,
                                "url": "https://pbs.twimg.com/card_img/1800137384060747776/iSuojub4?format=png&name=800x419"
                            },
                            "type": "IMAGE"
                        }
                    },
                    {
                        "key": "thumbnail_image_small",
                        "value": {
                            "image_value": {
                                "height": 75,
                                "width": 144,
                                "url": "https://pbs.twimg.com/card_img/1800137384060747776/iSuojub4?format=png&name=144x144"
                            },
                            "type": "IMAGE"
                        }
                    },
                    {
                        "key": "thumbnail_image_x_large",
                        "value": {
                            "image_value": {
                                "height": 836,
                                "width": 1600,
                                "url": "https://pbs.twimg.com/card_img/1800137384060747776/iSuojub4?format=png&name=2048x2048_2_exp"
                            },
                            "type": "IMAGE"
                        }
                    },
                    {
                        "key": "photo_image_full_size_original",
                        "value": {
                            "image_value": {
                                "height": 836,
                                "width": 1600,
                                "url": "https://pbs.twimg.com/card_img/1800137384060747776/iSuojub4?format=png&name=orig"
                            },
                            "type": "IMAGE"
                        }
                    },
                    {
                        "key": "vanity_url",
                        "value": {
                            "scribe_key": "vanity_url",
                            "string_value": "bun.sh",
                            "type": "STRING"
                        }
                    },
                    {
                        "key": "photo_image_full_size",
                        "value": {
                            "image_value": {
                                "height": 314,
                                "width": 600,
                                "url": "https://pbs.twimg.com/card_img/1800137384060747776/iSuojub4?format=png&name=600x314"
                            },
                            "type": "IMAGE"
                        }
                    },
                    {
                        "key": "thumbnail_image_color",
                        "value": {
                            "image_color_value": {
                                "palette": [
                                    {
                                        "rgb": {
                                            "blue": 18,
                                            "green": 16,
                                            "red": 15
                                        },
                                        "percentage": 91.87
                                    },
                                    {
                                        "rgb": {
                                            "blue": 179,
                                            "green": 181,
                                            "red": 183
                                        },
                                        "percentage": 5.24
                                    },
                                    {
                                        "rgb": {
                                            "blue": 122,
                                            "green": 125,
                                            "red": 129
                                        },
                                        "percentage": 0.3
                                    }
                                ]
                            },
                            "type": "IMAGE_COLOR"
                        }
                    },
                    {
                        "key": "title",
                        "value": {
                            "string_value": "Bun — A fast all-in-one JavaScript runtime",
                            "type": "STRING"
                        }
                    },
                    {
                        "key": "summary_photo_image_color",
                        "value": {
                            "image_color_value": {
                                "palette": [
                                    {
                                        "rgb": {
                                            "blue": 18,
                                            "green": 16,
                                            "red": 15
                                        },
                                        "percentage": 91.87
                                    },
                                    {
                                        "rgb": {
                                            "blue": 179,
                                            "green": 181,
                                            "red": 183
                                        },
                                        "percentage": 5.24
                                    },
                                    {
                                        "rgb": {
                                            "blue": 122,
                                            "green": 125,
                                            "red": 129
                                        },
                                        "percentage": 0.3
                                    }
                                ]
                            },
                            "type": "IMAGE_COLOR"
                        }
                    },
                    {
                        "key": "summary_photo_image_x_large",
                        "value": {
                            "image_value": {
                                "height": 836,
                                "width": 1600,
                                "url": "https://pbs.twimg.com/card_img/1800137384060747776/iSuojub4?format=png&name=2048x2048_2_exp"
                            },
                            "type": "IMAGE"
                        }
                    },
                    {
                        "key": "summary_photo_image",
                        "value": {
                            "image_value": {
                                "height": 314,
                                "width": 600,
                                "url": "https://pbs.twimg.com/card_img/1800137384060747776/iSuojub4?format=png&name=600x314"
                            },
                            "type": "IMAGE"
                        }
                    },
                    {
                        "key": "photo_image_full_size_color",
                        "value": {
                            "image_color_value": {
                                "palette": [
                                    {
                                        "rgb": {
                                            "blue": 18,
                                            "green": 16,
                                            "red": 15
                                        },
                                        "percentage": 91.87
                                    },
                                    {
                                        "rgb": {
                                            "blue": 179,
                                            "green": 181,
                                            "red": 183
                                        },
                                        "percentage": 5.24
                                    },
                                    {
                                        "rgb": {
                                            "blue": 122,
                                            "green": 125,
                                            "red": 129
                                        },
                                        "percentage": 0.3
                                    }
                                ]
                            },
                            "type": "IMAGE_COLOR"
                        }
                    },
                    {
                        "key": "photo_image_full_size_x_large",
                        "value": {
                            "image_value": {
                                "height": 836,
                                "width": 1600,
                                "url": "https://pbs.twimg.com/card_img/1800137384060747776/iSuojub4?format=png&name=2048x2048_2_exp"
                            },
                            "type": "IMAGE"
                        }
                    },
                    {
                        "key": "card_url",
                        "value": {
                            "scribe_key": "card_url",
                            "string_value": "https://t.co/Yt6tAcnBQs",
                            "type": "STRING"
                        }
                    },
                    {
                        "key": "summary_photo_image_original",
                        "value": {
                            "image_value": {
                                "height": 836,
                                "width": 1600,
                                "url": "https://pbs.twimg.com/card_img/1800137384060747776/iSuojub4?format=png&name=orig"
                            },
                            "type": "IMAGE"
                        }
                    }
                ],
                "expanded_url": "https://bun.sh/",
                "retweet_tweet_id": null,
                "extended_entities": null,
                "conversation_id": "1544460933753229312",
                "retweet_status": null,
                "quoted_status": null,
                "bookmark_count": 837,
                "source": "Twitter Web App",
                "community_note": null
            },
            "quoted_status": null,
            "bookmark_count": 0,
            "source": "Twitter for iPhone",
            "community_note": null
        },
        {
            "tweet_id": "1581012889728856064",
            "creation_date": "Fri Oct 14 20:03:41 +0000 2022",
            "text": "Can we talk about how much the #rust community is so helpful!!",
            "media_url": null,
            "video_url": null,
            "user": {
                "creation_date": "Sun Dec 13 03:52:21 +0000 2009",
                "user_id": "96479162",
                "username": "omarmhaimdat",
                "name": "Omar MHAIMDAT",
                "follower_count": 964,
                "following_count": 1348,
                "favourites_count": 7101,
                "is_private": false,
                "is_verified": false,
                "is_blue_verified": true,
                "location": "Casablanca, Morocco",
                "profile_pic_url": "https://pbs.twimg.com/profile_images/1271521722945110016/AvKfKpLo_normal.jpg",
                "profile_banner_url": "https://pbs.twimg.com/profile_banners/96479162/1599303392",
                "description": "Data Scientist | Software Engineer",
                "external_url": "https://t.co/Bqg9bJElJ2",
                "number_of_tweets": 3176,
                "bot": false,
                "timestamp": 1260676341,
                "has_nft_avatar": false,
                "category": null,
                "default_profile": false,
                "default_profile_image": false,
                "listed_count": 11,
                "verified_type": null
            },
            "language": "en",
            "favorite_count": 0,
            "retweet_count": 0,
            "reply_count": 0,
            "quote_count": 0,
            "retweet": false,
            "views": null,
            "timestamp": 1665777821,
            "video_view_count": null,
            "in_reply_to_status_id": null,
            "quoted_status_id": null,
            "binding_values": null,
            "expanded_url": null,
            "retweet_tweet_id": null,
            "extended_entities": null,
            "conversation_id": "1581012889728856064",
            "retweet_status": null,
            "quoted_status": null,
            "bookmark_count": 0,
            "source": "Twitter for Mac",
            "community_note": null
        },
        {
            "tweet_id": "1579514658368561156",
            "creation_date": "Mon Oct 10 16:50:15 +0000 2022",
            "text": "As part of my week-end project, I have created a Python binding for WhatLang. WhatLang is a Rust library for detecting the language of a text.\n\nPypi link: https://t.co/30PohAcmJ1\nGithub link: https://t.co/tb9zX3XiDc\n\nany contribution is appreciated. https://t.co/SXNoC13vrR",
            "media_url": [
                "https://pbs.twimg.com/media/FeuQNQSX0AYWuBG.jpg"
            ],
            "video_url": null,
            "user": {
                "creation_date": "Sun Dec 13 03:52:21 +0000 2009",
                "user_id": "96479162",
                "username": "omarmhaimdat",
                "name": "Omar MHAIMDAT",
                "follower_count": 964,
                "following_count": 1348,
                "favourites_count": 7101,
                "is_private": false,
                "is_verified": false,
                "is_blue_verified": true,
                "location": "Casablanca, Morocco",
                "profile_pic_url": "https://pbs.twimg.com/profile_images/1271521722945110016/AvKfKpLo_normal.jpg",
                "profile_banner_url": "https://pbs.twimg.com/profile_banners/96479162/1599303392",
                "description": "Data Scientist | Software Engineer",
                "external_url": "https://t.co/Bqg9bJElJ2",
                "number_of_tweets": 3176,
                "bot": false,
                "timestamp": 1260676341,
                "has_nft_avatar": false,
                "category": null,
                "default_profile": false,
                "default_profile_image": false,
                "listed_count": 11,
                "verified_type": null
            },
            "language": "en",
            "favorite_count": 2,
            "retweet_count": 1,
            "reply_count": 0,
            "quote_count": 0,
            "retweet": false,
            "views": null,
            "timestamp": 1665420615,
            "video_view_count": null,
            "in_reply_to_status_id": null,
            "quoted_status_id": null,
            "binding_values": null,
            "expanded_url": "https://pypi.org/project/whatlang-pyo3/",
            "retweet_tweet_id": null,
            "extended_entities": {
                "media": [
                    {
                        "display_url": "pic.twitter.com/SXNoC13vrR",
                        "expanded_url": "https://twitter.com/omarmhaimdat/status/1579514658368561156/photo/1",
                        "id_str": "1579514651708215302",
                        "indices": [
                            250,
                            273
                        ],
                        "media_key": "3_1579514651708215302",
                        "media_url_https": "https://pbs.twimg.com/media/FeuQNQSX0AYWuBG.jpg",
                        "type": "photo",
                        "url": "https://t.co/SXNoC13vrR",
                        "ext_media_availability": {
                            "status": "Available"
                        },
                        "features": {
                            "large": {
                                "faces": []
                            },
                            "medium": {
                                "faces": []
                            },
                            "small": {
                                "faces": []
                            },
                            "orig": {
                                "faces": []
                            }
                        },
                        "sizes": {
                            "large": {
                                "h": 1272,
                                "w": 2048,
                                "resize": "fit"
                            },
                            "medium": {
                                "h": 745,
                                "w": 1200,
                                "resize": "fit"
                            },
                            "small": {
                                "h": 422,
                                "w": 680,
                                "resize": "fit"
                            },
                            "thumb": {
                                "h": 150,
                                "w": 150,
                                "resize": "crop"
                            }
                        },
                        "original_info": {
                            "height": 2544,
                            "width": 4096,
                            "focus_rects": [
                                {
                                    "x": 0,
                                    "y": 0,
                                    "w": 4096,
                                    "h": 2294
                                },
                                {
                                    "x": 776,
                                    "y": 0,
                                    "w": 2544,
                                    "h": 2544
                                },
                                {
                                    "x": 932,
                                    "y": 0,
                                    "w": 2232,
                                    "h": 2544
                                },
                                {
                                    "x": 1412,
                                    "y": 0,
                                    "w": 1272,
                                    "h": 2544
                                },
                                {
                                    "x": 0,
                                    "y": 0,
                                    "w": 4096,
                                    "h": 2544
                                }
                            ]
                        }
                    }
                ]
            },
            "conversation_id": "1579514658368561156",
            "retweet_status": null,
            "quoted_status": null,
            "bookmark_count": 1,
            "source": "Twitter for Mac",
            "community_note": null
        },
        {
            "tweet_id": "1570868934420889600",
            "creation_date": "Fri Sep 16 20:15:13 +0000 2022",
            "text": "I just published Twitter API on RapidAPI. Check it out! https://t.co/CO9BL3Xmwt",
            "media_url": null,
            "video_url": null,
            "user": {
                "creation_date": "Sun Dec 13 03:52:21 +0000 2009",
                "user_id": "96479162",
                "username": "omarmhaimdat",
                "name": "Omar MHAIMDAT",
                "follower_count": 964,
                "following_count": 1348,
                "favourites_count": 7101,
                "is_private": false,
                "is_verified": false,
                "is_blue_verified": true,
                "location": "Casablanca, Morocco",
                "profile_pic_url": "https://pbs.twimg.com/profile_images/1271521722945110016/AvKfKpLo_normal.jpg",
                "profile_banner_url": "https://pbs.twimg.com/profile_banners/96479162/1599303392",
                "description": "Data Scientist | Software Engineer",
                "external_url": "https://t.co/Bqg9bJElJ2",
                "number_of_tweets": 3176,
                "bot": false,
                "timestamp": 1260676341,
                "has_nft_avatar": false,
                "category": null,
                "default_profile": false,
                "default_profile_image": false,
                "listed_count": 11,
                "verified_type": null
            },
            "language": "en",
            "favorite_count": 2,
            "retweet_count": 0,
            "reply_count": 0,
            "quote_count": 0,
            "retweet": false,
            "views": null,
            "timestamp": 1663359313,
            "video_view_count": null,
            "in_reply_to_status_id": null,
            "quoted_status_id": null,
            "binding_values": [
                {
                    "key": "photo_image_full_size_large",
                    "value": {
                        "image_value": {
                            "height": 92,
                            "width": 175,
                            "url": "https://pbs.twimg.com/card_img/1801955838732423168/Zxs6xFgb?format=png&name=386x202"
                        },
                        "type": "IMAGE"
                    }
                },
                {
                    "key": "thumbnail_image",
                    "value": {
                        "image_value": {
                            "height": 144,
                            "width": 144,
                            "url": "https://pbs.twimg.com/card_img/1801955838732423168/Zxs6xFgb?format=png&name=144x144"
                        },
                        "type": "IMAGE"
                    }
                },
                {
                    "key": "description",
                    "value": {
                        "string_value": "Introducing X API, a robust Twitter API designed to unlock valuable Twitter data effortlessly. With X API, access tweet details, user followers, followings, post engagements, and more. Explore top,...",
                        "type": "STRING"
                    }
                },
                {
                    "key": "domain",
                    "value": {
                        "string_value": "rapidapi.com",
                        "type": "STRING"
                    }
                },
                {
                    "key": "thumbnail_image_large",
                    "value": {
                        "image_value": {
                            "height": 627,
                            "width": 1200,
                            "url": "https://pbs.twimg.com/card_img/1801955838732423168/Zxs6xFgb?format=png&name=1200x627"
                        },
                        "type": "IMAGE"
                    }
                },
                {
                    "key": "summary_photo_image_small",
                    "value": {
                        "image_value": {
                            "height": 92,
                            "width": 175,
                            "url": "https://pbs.twimg.com/card_img/1801955838732423168/Zxs6xFgb?format=png&name=386x202"
                        },
                        "type": "IMAGE"
                    }
                },
                {
                    "key": "thumbnail_image_original",
                    "value": {
                        "image_value": {
                            "height": 175,
                            "width": 175,
                            "url": "https://pbs.twimg.com/card_img/1801955838732423168/Zxs6xFgb?format=png&name=orig"
                        },
                        "type": "IMAGE"
                    }
                },
                {
                    "key": "photo_image_full_size_small",
                    "value": {
                        "image_value": {
                            "height": 92,
                            "width": 175,
                            "url": "https://pbs.twimg.com/card_img/1801955838732423168/Zxs6xFgb?format=png&name=386x202"
                        },
                        "type": "IMAGE"
                    }
                },
                {
                    "key": "summary_photo_image_large",
                    "value": {
                        "image_value": {
                            "height": 92,
                            "width": 175,
                            "url": "https://pbs.twimg.com/card_img/1801955838732423168/Zxs6xFgb?format=png&name=386x202"
                        },
                        "type": "IMAGE"
                    }
                },
                {
                    "key": "thumbnail_image_small",
                    "value": {
                        "image_value": {
                            "height": 100,
                            "width": 100,
                            "url": "https://pbs.twimg.com/card_img/1801955838732423168/Zxs6xFgb?format=png&name=100x100"
                        },
                        "type": "IMAGE"
                    }
                },
                {
                    "key": "thumbnail_image_x_large",
                    "value": {
                        "image_value": {
                            "height": 175,
                            "width": 175,
                            "url": "https://pbs.twimg.com/card_img/1801955838732423168/Zxs6xFgb?format=png&name=2048x2048_2_exp"
                        },
                        "type": "IMAGE"
                    }
                },
                {
                    "key": "photo_image_full_size_original",
                    "value": {
                        "image_value": {
                            "height": 175,
                            "width": 175,
                            "url": "https://pbs.twimg.com/card_img/1801955838732423168/Zxs6xFgb?format=png&name=orig"
                        },
                        "type": "IMAGE"
                    }
                },
                {
                    "key": "vanity_url",
                    "value": {
                        "scribe_key": "vanity_url",
                        "string_value": "rapidapi.com",
                        "type": "STRING"
                    }
                },
                {
                    "key": "photo_image_full_size",
                    "value": {
                        "image_value": {
                            "height": 92,
                            "width": 175,
                            "url": "https://pbs.twimg.com/card_img/1801955838732423168/Zxs6xFgb?format=png&name=386x202"
                        },
                        "type": "IMAGE"
                    }
                },
                {
                    "key": "thumbnail_image_color",
                    "value": {
                        "image_color_value": {
                            "palette": [
                                {
                                    "rgb": {
                                        "blue": 255,
                                        "green": 255,
                                        "red": 255
                                    },
                                    "percentage": 79.49
                                },
                                {
                                    "rgb": {
                                        "blue": 240,
                                        "green": 155,
                                        "red": 29
                                    },
                                    "percentage": 18.77
                                },
                                {
                                    "rgb": {
                                        "blue": 247,
                                        "green": 202,
                                        "red": 136
                                    },
                                    "percentage": 0.54
                                }
                            ]
                        },
                        "type": "IMAGE_COLOR"
                    }
                },
                {
                    "key": "title",
                    "value": {
                        "string_value": "Twitter",
                        "type": "STRING"
                    }
                },
                {
                    "key": "summary_photo_image_color",
                    "value": {
                        "image_color_value": {
                            "palette": [
                                {
                                    "rgb": {
                                        "blue": 255,
                                        "green": 255,
                                        "red": 255
                                    },
                                    "percentage": 79.49
                                },
                                {
                                    "rgb": {
                                        "blue": 240,
                                        "green": 155,
                                        "red": 29
                                    },
                                    "percentage": 18.77
                                },
                                {
                                    "rgb": {
                                        "blue": 247,
                                        "green": 202,
                                        "red": 136
                                    },
                                    "percentage": 0.54
                                }
                            ]
                        },
                        "type": "IMAGE_COLOR"
                    }
                },
                {
                    "key": "summary_photo_image_x_large",
                    "value": {
                        "image_value": {
                            "height": 175,
                            "width": 175,
                            "url": "https://pbs.twimg.com/card_img/1801955838732423168/Zxs6xFgb?format=png&name=2048x2048_2_exp"
                        },
                        "type": "IMAGE"
                    }
                },
                {
                    "key": "summary_photo_image",
                    "value": {
                        "image_value": {
                            "height": 92,
                            "width": 175,
                            "url": "https://pbs.twimg.com/card_img/1801955838732423168/Zxs6xFgb?format=png&name=386x202"
                        },
                        "type": "IMAGE"
                    }
                },
                {
                    "key": "photo_image_full_size_color",
                    "value": {
                        "image_color_value": {
                            "palette": [
                                {
                                    "rgb": {
                                        "blue": 255,
                                        "green": 255,
                                        "red": 255
                                    },
                                    "percentage": 79.49
                                },
                                {
                                    "rgb": {
                                        "blue": 240,
                                        "green": 155,
                                        "red": 29
                                    },
                                    "percentage": 18.77
                                },
                                {
                                    "rgb": {
                                        "blue": 247,
                                        "green": 202,
                                        "red": 136
                                    },
                                    "percentage": 0.54
                                }
                            ]
                        },
                        "type": "IMAGE_COLOR"
                    }
                },
                {
                    "key": "photo_image_full_size_x_large",
                    "value": {
                        "image_value": {
                            "height": 175,
                            "width": 175,
                            "url": "https://pbs.twimg.com/card_img/1801955838732423168/Zxs6xFgb?format=png&name=2048x2048_2_exp"
                        },
                        "type": "IMAGE"
                    }
                },
                {
                    "key": "card_url",
                    "value": {
                        "scribe_key": "card_url",
                        "string_value": "https://t.co/CO9BL3Xmwt",
                        "type": "STRING"
                    }
                },
                {
                    "key": "summary_photo_image_original",
                    "value": {
                        "image_value": {
                            "height": 175,
                            "width": 175,
                            "url": "https://pbs.twimg.com/card_img/1801955838732423168/Zxs6xFgb?format=png&name=orig"
                        },
                        "type": "IMAGE"
                    }
                }
            ],
            "expanded_url": "https://rapidapi.com/omarmhaimdat/api/twitter154",
            "retweet_tweet_id": null,
            "extended_entities": null,
            "conversation_id": "1570868934420889600",
            "retweet_status": null,
            "quoted_status": null,
            "bookmark_count": 1,
            "source": "Twitter for Mac",
            "community_note": null
        },
        {
            "tweet_id": "1522990095711621120",
            "creation_date": "Sat May 07 17:21:49 +0000 2022",
            "text": "I just published Twitter API on RapidAPI. Check it out! https://t.co/CO9BL4epyt",
            "media_url": null,
            "video_url": null,
            "user": {
                "creation_date": "Sun Dec 13 03:52:21 +0000 2009",
                "user_id": "96479162",
                "username": "omarmhaimdat",
                "name": "Omar MHAIMDAT",
                "follower_count": 964,
                "following_count": 1348,
                "favourites_count": 7101,
                "is_private": false,
                "is_verified": false,
                "is_blue_verified": true,
                "location": "Casablanca, Morocco",
                "profile_pic_url": "https://pbs.twimg.com/profile_images/1271521722945110016/AvKfKpLo_normal.jpg",
                "profile_banner_url": "https://pbs.twimg.com/profile_banners/96479162/1599303392",
                "description": "Data Scientist | Software Engineer",
                "external_url": "https://t.co/Bqg9bJElJ2",
                "number_of_tweets": 3176,
                "bot": false,
                "timestamp": 1260676341,
                "has_nft_avatar": false,
                "category": null,
                "default_profile": false,
                "default_profile_image": false,
                "listed_count": 11,
                "verified_type": null
            },
            "language": "en",
            "favorite_count": 3,
            "retweet_count": 0,
            "reply_count": 2,
            "quote_count": 0,
            "retweet": false,
            "views": null,
            "timestamp": 1651944109,
            "video_view_count": null,
            "in_reply_to_status_id": null,
            "quoted_status_id": null,
            "binding_values": [
                {
                    "key": "photo_image_full_size_large",
                    "value": {
                        "image_value": {
                            "height": 92,
                            "width": 175,
                            "url": "https://pbs.twimg.com/card_img/1801955838732423168/Zxs6xFgb?format=png&name=386x202"
                        },
                        "type": "IMAGE"
                    }
                },
                {
                    "key": "thumbnail_image",
                    "value": {
                        "image_value": {
                            "height": 144,
                            "width": 144,
                            "url": "https://pbs.twimg.com/card_img/1801955838732423168/Zxs6xFgb?format=png&name=144x144"
                        },
                        "type": "IMAGE"
                    }
                },
                {
                    "key": "description",
                    "value": {
                        "string_value": "Introducing X API, a robust Twitter API designed to unlock valuable Twitter data effortlessly. With X API, access tweet details, user followers, followings, post engagements, and more. Explore top,...",
                        "type": "STRING"
                    }
                },
                {
                    "key": "domain",
                    "value": {
                        "string_value": "rapidapi.com",
                        "type": "STRING"
                    }
                },
                {
                    "key": "thumbnail_image_large",
                    "value": {
                        "image_value": {
                            "height": 627,
                            "width": 1200,
                            "url": "https://pbs.twimg.com/card_img/1801955838732423168/Zxs6xFgb?format=png&name=1200x627"
                        },
                        "type": "IMAGE"
                    }
                },
                {
                    "key": "summary_photo_image_small",
                    "value": {
                        "image_value": {
                            "height": 92,
                            "width": 175,
                            "url": "https://pbs.twimg.com/card_img/1801955838732423168/Zxs6xFgb?format=png&name=386x202"
                        },
                        "type": "IMAGE"
                    }
                },
                {
                    "key": "thumbnail_image_original",
                    "value": {
                        "image_value": {
                            "height": 175,
                            "width": 175,
                            "url": "https://pbs.twimg.com/card_img/1801955838732423168/Zxs6xFgb?format=png&name=orig"
                        },
                        "type": "IMAGE"
                    }
                },
                {
                    "key": "photo_image_full_size_small",
                    "value": {
                        "image_value": {
                            "height": 92,
                            "width": 175,
                            "url": "https://pbs.twimg.com/card_img/1801955838732423168/Zxs6xFgb?format=png&name=386x202"
                        },
                        "type": "IMAGE"
                    }
                },
                {
                    "key": "summary_photo_image_large",
                    "value": {
                        "image_value": {
                            "height": 92,
                            "width": 175,
                            "url": "https://pbs.twimg.com/card_img/1801955838732423168/Zxs6xFgb?format=png&name=386x202"
                        },
                        "type": "IMAGE"
                    }
                },
                {
                    "key": "thumbnail_image_small",
                    "value": {
                        "image_value": {
                            "height": 100,
                            "width": 100,
                            "url": "https://pbs.twimg.com/card_img/1801955838732423168/Zxs6xFgb?format=png&name=100x100"
                        },
                        "type": "IMAGE"
                    }
                },
                {
                    "key": "thumbnail_image_x_large",
                    "value": {
                        "image_value": {
                            "height": 175,
                            "width": 175,
                            "url": "https://pbs.twimg.com/card_img/1801955838732423168/Zxs6xFgb?format=png&name=2048x2048_2_exp"
                        },
                        "type": "IMAGE"
                    }
                },
                {
                    "key": "photo_image_full_size_original",
                    "value": {
                        "image_value": {
                            "height": 175,
                            "width": 175,
                            "url": "https://pbs.twimg.com/card_img/1801955838732423168/Zxs6xFgb?format=png&name=orig"
                        },
                        "type": "IMAGE"
                    }
                },
                {
                    "key": "vanity_url",
                    "value": {
                        "scribe_key": "vanity_url",
                        "string_value": "rapidapi.com",
                        "type": "STRING"
                    }
                },
                {
                    "key": "photo_image_full_size",
                    "value": {
                        "image_value": {
                            "height": 92,
                            "width": 175,
                            "url": "https://pbs.twimg.com/card_img/1801955838732423168/Zxs6xFgb?format=png&name=386x202"
                        },
                        "type": "IMAGE"
                    }
                },
                {
                    "key": "thumbnail_image_color",
                    "value": {
                        "image_color_value": {
                            "palette": [
                                {
                                    "rgb": {
                                        "blue": 255,
                                        "green": 255,
                                        "red": 255
                                    },
                                    "percentage": 79.49
                                },
                                {
                                    "rgb": {
                                        "blue": 240,
                                        "green": 155,
                                        "red": 29
                                    },
                                    "percentage": 18.77
                                },
                                {
                                    "rgb": {
                                        "blue": 247,
                                        "green": 202,
                                        "red": 136
                                    },
                                    "percentage": 0.54
                                }
                            ]
                        },
                        "type": "IMAGE_COLOR"
                    }
                },
                {
                    "key": "title",
                    "value": {
                        "string_value": "Twitter",
                        "type": "STRING"
                    }
                },
                {
                    "key": "summary_photo_image_color",
                    "value": {
                        "image_color_value": {
                            "palette": [
                                {
                                    "rgb": {
                                        "blue": 255,
                                        "green": 255,
                                        "red": 255
                                    },
                                    "percentage": 79.49
                                },
                                {
                                    "rgb": {
                                        "blue": 240,
                                        "green": 155,
                                        "red": 29
                                    },
                                    "percentage": 18.77
                                },
                                {
                                    "rgb": {
                                        "blue": 247,
                                        "green": 202,
                                        "red": 136
                                    },
                                    "percentage": 0.54
                                }
                            ]
                        },
                        "type": "IMAGE_COLOR"
                    }
                },
                {
                    "key": "summary_photo_image_x_large",
                    "value": {
                        "image_value": {
                            "height": 175,
                            "width": 175,
                            "url": "https://pbs.twimg.com/card_img/1801955838732423168/Zxs6xFgb?format=png&name=2048x2048_2_exp"
                        },
                        "type": "IMAGE"
                    }
                },
                {
                    "key": "summary_photo_image",
                    "value": {
                        "image_value": {
                            "height": 92,
                            "width": 175,
                            "url": "https://pbs.twimg.com/card_img/1801955838732423168/Zxs6xFgb?format=png&name=386x202"
                        },
                        "type": "IMAGE"
                    }
                },
                {
                    "key": "photo_image_full_size_color",
                    "value": {
                        "image_color_value": {
                            "palette": [
                                {
                                    "rgb": {
                                        "blue": 255,
                                        "green": 255,
                                        "red": 255
                                    },
                                    "percentage": 79.49
                                },
                                {
                                    "rgb": {
                                        "blue": 240,
                                        "green": 155,
                                        "red": 29
                                    },
                                    "percentage": 18.77
                                },
                                {
                                    "rgb": {
                                        "blue": 247,
                                        "green": 202,
                                        "red": 136
                                    },
                                    "percentage": 0.54
                                }
                            ]
                        },
                        "type": "IMAGE_COLOR"
                    }
                },
                {
                    "key": "photo_image_full_size_x_large",
                    "value": {
                        "image_value": {
                            "height": 175,
                            "width": 175,
                            "url": "https://pbs.twimg.com/card_img/1801955838732423168/Zxs6xFgb?format=png&name=2048x2048_2_exp"
                        },
                        "type": "IMAGE"
                    }
                },
                {
                    "key": "card_url",
                    "value": {
                        "scribe_key": "card_url",
                        "string_value": "https://t.co/CO9BL4epyt",
                        "type": "STRING"
                    }
                },
                {
                    "key": "summary_photo_image_original",
                    "value": {
                        "image_value": {
                            "height": 175,
                            "width": 175,
                            "url": "https://pbs.twimg.com/card_img/1801955838732423168/Zxs6xFgb?format=png&name=orig"
                        },
                        "type": "IMAGE"
                    }
                }
            ],
            "expanded_url": "https://rapidapi.com/omarmhaimdat/api/twitter154",
            "retweet_tweet_id": null,
            "extended_entities": null,
            "conversation_id": "1522990095711621120",
            "retweet_status": null,
            "quoted_status": null,
            "bookmark_count": 0,
            "source": "Twitter for Mac",
            "community_note": null
        },
        {
            "tweet_id": "1517995317697916928",
            "creation_date": "Sat Apr 23 22:34:21 +0000 2022",
            "text": "Sometimes you know an exception can be thrown, and you just want to ignore it. Take advantage of the context manager, which allows you to allocate and release resources.\n\nUse “ignore instead”. Here's a full code example:\n\nCredits to: @raymondh https://t.co/ACw677xTtN",
            "media_url": [
                "https://pbs.twimg.com/media/FREAsbkXIAYiaVV.jpg"
            ],
            "video_url": null,
            "user": {
                "creation_date": "Sun Dec 13 03:52:21 +0000 2009",
                "user_id": "96479162",
                "username": "omarmhaimdat",
                "name": "Omar MHAIMDAT",
                "follower_count": 964,
                "following_count": 1348,
                "favourites_count": 7101,
                "is_private": false,
                "is_verified": false,
                "is_blue_verified": true,
                "location": "Casablanca, Morocco",
                "profile_pic_url": "https://pbs.twimg.com/profile_images/1271521722945110016/AvKfKpLo_normal.jpg",
                "profile_banner_url": "https://pbs.twimg.com/profile_banners/96479162/1599303392",
                "description": "Data Scientist | Software Engineer",
                "external_url": "https://t.co/Bqg9bJElJ2",
                "number_of_tweets": 3176,
                "bot": false,
                "timestamp": 1260676341,
                "has_nft_avatar": false,
                "category": null,
                "default_profile": false,
                "default_profile_image": false,
                "listed_count": 11,
                "verified_type": null
            },
            "language": "en",
            "favorite_count": 13,
            "retweet_count": 3,
            "reply_count": 2,
            "quote_count": 0,
            "retweet": false,
            "views": null,
            "timestamp": 1650753261,
            "video_view_count": null,
            "in_reply_to_status_id": null,
            "quoted_status_id": null,
            "binding_values": null,
            "expanded_url": null,
            "retweet_tweet_id": null,
            "extended_entities": {
                "media": [
                    {
                        "display_url": "pic.twitter.com/ACw677xTtN",
                        "expanded_url": "https://twitter.com/omarmhaimdat/status/1517995317697916928/photo/1",
                        "id_str": "1517995312715079686",
                        "indices": [
                            244,
                            267
                        ],
                        "media_key": "3_1517995312715079686",
                        "media_url_https": "https://pbs.twimg.com/media/FREAsbkXIAYiaVV.jpg",
                        "type": "photo",
                        "url": "https://t.co/ACw677xTtN",
                        "ext_media_availability": {
                            "status": "Available"
                        },
                        "features": {
                            "large": {
                                "faces": []
                            },
                            "medium": {
                                "faces": []
                            },
                            "small": {
                                "faces": []
                            },
                            "orig": {
                                "faces": []
                            }
                        },
                        "sizes": {
                            "large": {
                                "h": 861,
                                "w": 2048,
                                "resize": "fit"
                            },
                            "medium": {
                                "h": 504,
                                "w": 1200,
                                "resize": "fit"
                            },
                            "small": {
                                "h": 286,
                                "w": 680,
                                "resize": "fit"
                            },
                            "thumb": {
                                "h": 150,
                                "w": 150,
                                "resize": "crop"
                            }
                        },
                        "original_info": {
                            "height": 1291,
                            "width": 3072,
                            "focus_rects": [
                                {
                                    "x": 767,
                                    "y": 0,
                                    "w": 2305,
                                    "h": 1291
                                },
                                {
                                    "x": 1582,
                                    "y": 0,
                                    "w": 1291,
                                    "h": 1291
                                },
                                {
                                    "x": 1661,
                                    "y": 0,
                                    "w": 1132,
                                    "h": 1291
                                },
                                {
                                    "x": 1904,
                                    "y": 0,
                                    "w": 646,
                                    "h": 1291
                                },
                                {
                                    "x": 0,
                                    "y": 0,
                                    "w": 3072,
                                    "h": 1291
                                }
                            ]
                        }
                    }
                ]
            },
            "conversation_id": "1517995317697916928",
            "retweet_status": null,
            "quoted_status": null,
            "bookmark_count": 2,
            "source": "Twitter for Mac",
            "community_note": null
        }
    ],
    "continuation_token": "DAABCgABGQhXJJh__-sKAAIVEQCy4hcwAAgAAwAAAAIAAA"
}*/
