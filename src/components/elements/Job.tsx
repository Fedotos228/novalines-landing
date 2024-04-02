import { IJob } from '@/constants/data.types'
import Button from '../ui/Button'
import { Card, CardBody, CardFooter, CardHeader } from '../ui/Card'

export default function Job({ item }: { item: IJob }) {
    const { title, location, slug, requirements } = item.attributes
    return (
        <Card>
            <CardHeader>
                <h2 className="text-xl font-semibold text-blaze-500">{title}</h2>
                <p className="text-gray-500 mt-2">{location}</p>
            </CardHeader>
            <CardBody>
                <h6>Responsabilities:</h6>
                <ul className="list-disc pl-6 mt-2 text-sm text-secondary flex flex-col gap-2">
                    {requirements.map(requirement => (
                        <li key={requirement.id} className="text-gray-500">
                            {requirement.title}
                        </li>
                    ))}
                </ul>

                <Button
                    variant="link"
                    size="custom"
                    href={slug}
                    target="_blank"
                    className="text-sm mt-2">
                    More info...
                </Button>
            </CardBody>
            <CardFooter>
                <Button variant="outline" target="_blank" href={slug} passHref={true}>
                    Quick apply
                </Button>
            </CardFooter>
        </Card>
    )
}
