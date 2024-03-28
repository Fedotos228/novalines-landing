import React from 'react';
import { Card, CardBody, CardFooter, CardHeader } from '../ui/Card';
import Button from '../ui/Button';
import { IJob } from '@/constants/data.types';

export default function Job({ item }: { item: IJob }) {
    return (
        <Card>
            <CardHeader>
                <h2 className="text-xl font-semibold text-blaze-500">{item.name}</h2>
                <p className="text-gray-500 mt-2">{item.location}</p>
            </CardHeader>
            <CardBody>
                <h6>Responsabilities:</h6>
                <ul className="list-disc pl-6 mt-2 text-sm text-secondary flex flex-col gap-2">
                    {item.responsibilities.map((responsibility, index) => (
                        <li key={index} className="text-gray-500">
                            {responsibility}
                        </li>
                    ))}
                </ul>

                <Button
                    variant="link"
                    size="custom"
                    href={item.moreInfo}
                    target="_blank"
                    className="text-sm mt-2">
                    More info...
                </Button>
            </CardBody>
            <CardFooter>
                <Button variant="outline" target="_blank" href={item.quickApply} passHref={true}>
                    Quick apply
                </Button>
            </CardFooter>
        </Card>
    );
}
