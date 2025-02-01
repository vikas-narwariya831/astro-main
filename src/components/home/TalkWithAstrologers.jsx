import { MessageCircleMore, Phone, Star, User, Video } from "lucide-react";
import Link from "next/link";
import { SunFlareBgContainer } from "../SunFlareBgContainer"
import { TextDecorate } from "../TextDecorate";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";



export const TalkWithAstrologers = ({ data }) => {
    return (
        <div className="space-y-16 py-10">
            <SunFlareBgContainer>
                <div className="text-center space-y-6 px-4 max-w-3xl m-auto">
                    <h2 className="text-3xl lg:text-4xl font-georgia-bold text-primary font-semibold"><TextDecorate>Talk</TextDecorate> To Astrologers</h2>
                    <p className="text-primary">Connect directly with expert astrologers for personalized guidance and insights tailored to your life's journey.</p>
                </div>

                <div className="w-[80%] max-w-7xl m-auto my-16 gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    {data?.map(({ publicName, avatar, experience, languages, _id }) => <Card className="overflow-hidden border-0 shadow-xl relative bg-light-purple-gradient p-0 rounded-xl" key={_id}>
                        <CardHeader>
                            <div className="flex items-center justify-between">
                                <p className="bg-green-500 text-xs px-2 py-1 rounded-full text-white">Available</p>
                                {/* <p className="text-primary text-sm font-semibold">₹ {rate}/min</p> */}
                            </div>
                        </CardHeader>
                        <CardContent className="flex space-y-2 flex-col items-center">
                            <Avatar className="w-20 h-20">
                                <AvatarImage src={avatar} />
                                <AvatarFallback className="bg-primary text-white">
                                    <User className="w-12 h-12" fill={'white'} />
                                </AvatarFallback>
                            </Avatar>

                            <div className="text-center space-y-1">
                                <p className="text-primary font-semibold">{publicName}</p>
                                <p className="text-sm text-primary opacity-75">Exp. {experience?.year} years</p>
                                <p className="text-sm text-primary opacity-75 flex items-center gap-2 justify-center"><Star fill="#eab308" className="text-yellow-500 w-3 h-3 min-w-3 " />4.5</p>
                                <div className="flex items-center gap-2">
                                    {languages?.map(({ label }) => <p className="text-purple-gradient font-medium text-sm" key={label}>{label}</p>)}
                                </div>
                            </div>

                        </CardContent>
                        <CardFooter>
                            <div className="flex items-center justify-center w-full gap-6">
                                <Link href={`${process.env.NEXT_PUBLIC_USER_PLATFORM}/chat`} className="bg-purple-gradient p-2 rounded-full text-primary-foreground">
                                    <MessageCircleMore strokeWidth={1.5} className="w-6 h-6" />
                                </Link>

                                <Link href={`${process.env.NEXT_PUBLIC_USER_PLATFORM}/call`} className="bg-purple-gradient p-2 rounded-full text-primary-foreground">
                                    <Phone strokeWidth={1.5} className="w-6 h-6" />
                                </Link>

                                <Link href={`${process.env.NEXT_PUBLIC_USER_PLATFORM}/astrologer/${_id}`} className="bg-purple-gradient p-2 rounded-full text-primary-foreground">
                                    <Video strokeWidth={1.5} className="w-6 h-6" />
                                </Link>
                            </div>
                        </CardFooter>
                        <div className="absolute -bottom-32 opacity-15 pointer-events-none">
                            <img
                                src="/Vectors/zodiac-circle.png"
                                alt="zodiac circle"
                                className="w-full object-cover"
                            />
                        </div>
                    </Card>)}
                </div>

                <Link href={process.env.NEXT_PUBLIC_USER_PLATFORM}>
                    <Button size="lg" className="m-auto block text-center" variant="outline">
                        See More
                    </Button>
                </Link>
            </SunFlareBgContainer>
        </div>
    )
}
