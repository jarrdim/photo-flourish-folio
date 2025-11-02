import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: 'What licenses do you offer?',
      answer: 'We offer two license types: Standard License for general use (up to 500,000 impressions) and Extended License for unlimited commercial use including merchandise resale.',
    },
    {
      question: 'Can I use images for commercial projects?',
      answer: 'Yes! All our images come with royalty-free licenses that allow commercial use. Choose the Standard License for most projects, or Extended License for merchandise and unlimited use.',
    },
    {
      question: 'What file formats are available?',
      answer: 'Most images are available in JPG and PNG formats. Select images also include TIFF format for maximum quality. All formats are included with your purchase.',
    },
    {
      question: 'Do I need to credit the photographer?',
      answer: 'No, attribution is not required with our royalty-free licenses, though we always appreciate it when you credit our talented photographers!',
    },
    {
      question: 'Can I get a refund?',
      answer: 'Due to the digital nature of our products, we cannot offer refunds once an image has been downloaded. However, we\'re happy to help with any issues - please contact our support team.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, MasterCard, American Express) and PayPal for your convenience.',
    },
    {
      question: 'How do I download my purchased images?',
      answer: 'After purchase, you\'ll receive an email with download links. You can also access all your purchases from your account dashboard anytime.',
    },
    {
      question: 'Are there any usage restrictions?',
      answer: 'You cannot resell or redistribute the images as-is. You must incorporate them into a new work (like a design, website, or publication). Extended License allows merchandise use.',
    },
    {
      question: 'What resolution are the images?',
      answer: 'Our images range from 4500x3000px to 7200x4800px, providing excellent quality for both web and large-format print projects.',
    },
    {
      question: 'Do you offer bulk discounts?',
      answer: 'Yes! Contact our sales team at sales@pixelmarket.com for information about subscription plans and volume licensing.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-lg text-muted-foreground">
              Find answers to common questions about our service
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center p-8 bg-muted/30 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
            <p className="text-muted-foreground mb-6">
              Our support team is here to help
            </p>
            <Button variant="accent" asChild>
              <a href="/contact">Contact Support</a>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;
