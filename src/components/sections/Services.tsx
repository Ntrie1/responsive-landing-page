import { services } from "../../utils/services"
import { Service } from "../cards/Service"
import { Container } from "../shared/Container"
import { Paragraph } from "../shared/Paragraph"
import { Title } from "../shared/Title"

export const Services = () => {
    return (
        <section id="services">
            <Container classname="space-y-10 md:space-y-12">
                <div className="text-center max-w-3xl mx-auto space-y-4">
                    <Title>Our AI Services</Title>
                    <Paragraph>
                        Unlock the potential of advanced machine learning, natural language
                        processing, and predictive analytics. Our services include:
                    </Paragraph>
                </div>

                <div>
                    {services.map((service, key) => (
                        <Service
                            key={key}
                            title={service.title}
                            description={service.description}
                            icon={service.icon} />
                    ))
                    }
                </div>
            </Container>
        </section>
    )
}