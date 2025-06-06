import React from 'react'

const Education = () => {
    return (
        <section id="education" className="py-20 bg-muted/30 w-full">
            <div className="container px-8 md:px-16">
                <div className="mx-auto max-w-3xl text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight mb-4">Education & Certifications</h2>
                    <p className="text-muted-foreground">
                        My academic background and professional certifications that have shaped my development journey.
                    </p>
                </div>

                <div className="space-y-12">
                    {/* Education Section */}
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-1/3">
                            <div className="sticky top-24">
                                <h3 className="text-xl font-bold mb-2">Education</h3>
                                <p className="text-muted-foreground">
                                    My academic background that laid the foundation for my development career.
                                </p>
                            </div>
                        </div>
                        <div className="md:w-2/3">
                            <div className="relative">
                                {/* Timeline line */}
                                <div className="absolute left-8 top-0 bottom-0 w-px bg-border"></div>

                                <div className="space-y-12">
                                    {/* Education Item 1 */}
                                    <div className="relative flex items-start gap-6">
                                        <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg relative z-10">
                                            MS
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="text-sm text-muted-foreground mb-1">2017 - 2019</div>
                                            <h4 className="text-lg font-semibold mb-1">Master of Science in Computer Science</h4>
                                            <div className="text-base text-muted-foreground mb-3">Stanford University, California</div>
                                            <p className="text-muted-foreground">
                                                Specialized in artificial intelligence and machine learning. Completed thesis on
                                                implementing deep learning algorithms for natural language processing applications with
                                                focus on real-time text analysis.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Education Item 2 */}
                                    <div className="relative flex items-start gap-6">
                                        <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white font-bold text-lg relative z-10">
                                            BE
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="text-sm text-muted-foreground mb-1">2013 - 2017</div>
                                            <h4 className="text-lg font-semibold mb-1">
                                                Bachelor of Engineering in Software Engineering
                                            </h4>
                                            <div className="text-base text-muted-foreground mb-3">
                                                Massachusetts Institute of Technology
                                            </div>
                                            <p className="text-muted-foreground">
                                                Graduated with honors focusing on software architecture, database systems, and web
                                                development. Active participant in hackathons and coding competitions, winning multiple
                                                awards for innovative solutions.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Professional Certifications Section */}
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-1/3">
                            <div className="sticky top-24">
                                <h3 className="text-xl font-bold mb-2">Professional Certifications</h3>
                                <p className="text-muted-foreground">
                                    Industry certifications that validate my technical expertise and commitment to continuous
                                    learning.
                                </p>
                            </div>
                        </div>
                        <div className="md:w-2/3">
                            <div className="relative">
                                {/* Timeline line */}
                                <div className="absolute left-8 top-0 bottom-0 w-px bg-border"></div>

                                <div className="space-y-12">
                                    {/* Certification Item 1 */}
                                    <div className="relative flex items-start gap-6">
                                        <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white font-bold text-sm relative z-10">
                                            AWS
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="text-sm text-muted-foreground mb-1">2022</div>
                                            <h4 className="text-lg font-semibold mb-1">AWS Certified Solutions Architect</h4>
                                            <div className="text-base text-muted-foreground mb-3">Amazon Web Services</div>
                                            <p className="text-muted-foreground">
                                                Professional certification for designing distributed applications and systems on the AWS
                                                platform. Demonstrates expertise in cloud architecture and best practices.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Certification Item 2 */}
                                    <div className="relative flex items-start gap-6">
                                        <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm relative z-10">
                                            GCP
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="text-sm text-muted-foreground mb-1">2021</div>
                                            <h4 className="text-lg font-semibold mb-1">Google Professional Cloud Developer</h4>
                                            <div className="text-base text-muted-foreground mb-3">Google Cloud Platform</div>
                                            <p className="text-muted-foreground">
                                                Certification for building scalable and reliable cloud-native applications using GCP
                                                services and tools. Expertise in containerization and microservices architecture.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Certification Item 3 */}
                                    <div className="relative flex items-start gap-6">
                                        <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center text-white font-bold text-sm relative z-10">
                                            MDB
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="text-sm text-muted-foreground mb-1">2020</div>
                                            <h4 className="text-lg font-semibold mb-1">MongoDB Certified Developer</h4>
                                            <div className="text-base text-muted-foreground mb-3">MongoDB Inc.</div>
                                            <p className="text-muted-foreground">
                                                Specialized certification in building applications with MongoDB, including advanced data
                                                modeling, querying optimization, and performance tuning for large-scale applications.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Education