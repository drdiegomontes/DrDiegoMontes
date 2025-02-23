'use client'

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

type ServiceCardProps = {
    service: {
        id: string
        title: string
        category: string
        image: string
        href: string
    }
}

export default function ServiceCard({ service }: ServiceCardProps) {
    const handleClick = () => {
        window.location.href = service.href
    }

    return (
        <div className="group block">
            <div
                className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-6 cursor-pointer"
                onClick={handleClick}
            >
                <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                />
            </div>
            <div className="space-y-3">
                <div className="flex items-center gap-2">
                    <p className="text-sm tracking-wide text-gray-600">{service.category}</p>
                    <span className="text-gray-400">|</span>
                    <Link href={service.href} className="text-sm text-black hover:underline flex items-center">
                        Learn More <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                </div>
                <h3
                    className="text-3xl font-light mb-2 cursor-pointer"
                    onClick={handleClick}
                >
                    {service.title}
                </h3>
            </div>
        </div>
    )
}