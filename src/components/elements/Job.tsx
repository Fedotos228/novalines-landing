import React from 'react';
import { Card, CardBody, CardFooter, CardHeader } from '../ui/Card';
import Button from '../ui/Button';

export default function Job() {
    return (
        <Card>
            <CardHeader>
                <h2 className="text-xl font-semibold text-blaze-500">Frontend Developer</h2>
                <p className="text-gray-500">Chisinau, Moldova</p>
            </CardHeader>
            <CardBody>
                <p className="text-gray-600">
                    We are looking for a Frontend Developer to join our team. You will be
                    responsible for the client side of our service. If you have outstanding
                    programming skills and a great passion for developing beautiful, innovative
                    applications, then you will love this job.
                </p>

                <div className="mt-4">
                    <h3 className="text-lg font-semibold">Requirements</h3>
                    <ul className="list-disc pl-6 mt-2 text-sm text-secondary flex flex-col gap-2">
                        <li>Experience with React.js</li>
                        <li>Experience with Tailwind CSS</li>
                        <li>Experience with TypeScript</li>
                    </ul>
                </div>
            </CardBody>
            <CardFooter>
                <Button
                    variant="outline"
                    target="_blank"
                    href="https://carriers.novalines.md/"
                    passHref={true}>
                    Quick apply
                </Button>
            </CardFooter>
        </Card>
    );
}
