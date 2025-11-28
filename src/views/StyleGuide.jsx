import { useState } from 'react';
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { Grid, GridItem } from '@/components/Grid';
import { Tag } from '@/components/Tag';
import { Icon } from '@/components/Icon';
import { Image, Avatar } from '@/components/Image';
import { Text, Title } from '@/components/Typography';
import { Section } from '@/components/Section';
import { SkipLink } from '@/components/SkipLink';
import { ProjectCard } from '@/components/Projects/ProjectCard';
import { ArticleCard } from '@/components/Articles/ArticleCard';
import styled from 'styled-components';

const StyleGuideContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--spacing-xl);
  font-family: var(--text-font-family);
`;

const Navigation = styled.nav`
  position: sticky;
  top: 20px;
  background: #f8f9fa;
  border-radius: 12px;
  padding: 16px;
  margin: 32px 0;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  border: 1px solid #e9ecef;
  z-index: 100;
`;

const NavItem = styled.a`
  padding: 8px 12px;
  background: white;
  border: 1px solid #dee2e6;
  border-radius: 6px;
  text-decoration: none;
  color: var(--text-color);
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s ease;
  
  &:hover {
    background: var(--title-color);
    color: white;
  }
`;

const ComponentSection = styled.section`
  margin: 48px 0;
  padding-top: 24px;
  border-top: 1px solid #e9ecef;
  
  &:first-of-type {
    border-top: none;
  }
`;

const ExampleGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
  margin: 32px 0;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  }
`;

const ExampleCard = styled.div`
  border: 1px solid #e9ecef;
  border-radius: 12px;
  padding: 24px;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Preview = styled.div`
  background: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  padding: 24px;
  margin: 16px 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px;
  
  > * {
    margin: 0;
  }
`;

const CodeBlock = styled.div`
  position: relative;
  background: #f1f3f4;
  border: 1px solid #d0d7de;
  border-radius: 8px;
  overflow: hidden;
  
  pre {
    margin: 0;
    padding: 16px;
    background: none;
    color: #24292f;
    font-family: 'SF Mono', Monaco, monospace;
    font-size: 13px;
    line-height: 1.5;
    overflow-x: auto;
  }
`;

const CopyButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  padding: 4px 8px;
  background: var(--title-color);
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 12px;
  cursor: pointer;
  
  &:hover {
    background: #0920d9;
  }
  
  &.copied {
    background: #28a745;
  }
`;

const ColorPalette = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  margin: 24px 0;
`;

const ColorSwatch = styled.div`
  background: ${props => props.color};
  height: 80px;
  border-radius: 8px;
  border: 1px solid #e9ecef;
  display: flex;
  align-items: flex-end;
  position: relative;
  
  &::after {
    content: '${props => props.color}';
    background: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 8px;
    font-size: 12px;
    font-family: 'SF Mono', Monaco, monospace;
    width: 100%;
    text-align: center;
  }
`;

const TokenTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 24px 0;
  
  th, td {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid #e9ecef;
  }
  
  th {
    background: #f8f9fa;
    font-weight: 600;
    font-size: 14px;
  }
  
  td {
    font-family: 'SF Mono', Monaco, monospace;
    font-size: 13px;
  }
`;

const IconGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 16px;
  margin: 24px 0;
`;

const IconCard = styled.div`
  padding: 16px;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  text-align: center;
  background: white;
  
  svg {
    margin-bottom: 8px;
  }
  
  span {
    font-size: 12px;
    color: #6c757d;
    font-family: 'SF Mono', Monaco, monospace;
  }
`;

export const StyleGuide = () => {
  const [copiedCode, setCopiedCode] = useState('');

  const copyToClipboard = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(''), 2000);
  };

  const ComponentShowcase = ({ title, description, children, code }) => (
    <ExampleCard>
      <Title as="h3" size="lg">{title}</Title>
      <Text size="md" style={{ color: '#6c757d', marginBottom: '16px' }}>{description}</Text>
      <Preview>{children}</Preview>
      <CodeBlock>
        <pre>{code}</pre>
        <CopyButton 
          onClick={() => copyToClipboard(code)}
          className={copiedCode === code ? 'copied' : ''}
        >
          {copiedCode === code ? 'Copied!' : 'Copy'}
        </CopyButton>
      </CodeBlock>
    </ExampleCard>
  );

  // Available icons from your icons.json
  const availableIcons = ['ArrowDown', 'Close', 'Github', 'Globe', 'Doc', 'StackOverflow', 'X', 'LinkedIn', 'Instagram'];

  return (
    <StyleGuideContainer>
      {/* Header */}
      <Section id="intro">
        <Title as="h1" size="huge" style={{ color: 'var(--title-color)' }}>
          Daniel's Design System
        </Title>
        <Text size="xl">
          A comprehensive component library and design system built for modern web applications. 
          Each component follows accessibility best practices and maintains visual consistency.
        </Text>
      </Section>

      {/* Navigation */}
      <Navigation>
        <NavItem href="#tokens">Design Tokens</NavItem>
        <NavItem href="#colors">Colors</NavItem>
        <NavItem href="#typography">Typography</NavItem>
        <NavItem href="#buttons">Buttons</NavItem>
        <NavItem href="#icons">Icons</NavItem>
        <NavItem href="#tags">Tags</NavItem>
        <NavItem href="#cards">Cards</NavItem>
        <NavItem href="#layout">Layout</NavItem>
        <NavItem href="#navigation">Navigation</NavItem>
      </Navigation>

      {/* DESIGN TOKENS */}
      <ComponentSection id="tokens">
        <Title as="h2" size="xxl">Design Tokens</Title>
        <Text>Foundational design values that ensure consistency across the design system.</Text>

        <Title as="h3" size="lg">Spacing Scale</Title>
        <TokenTable>
          <thead>
            <tr>
              <th>Token</th>
              <th>Value</th>
              <th>Usage</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>--spacing-xs</td><td>4px</td><td>Tight spacing, form elements</td></tr>
            <tr><td>--spacing-sm</td><td>8px</td><td>Small gaps, button padding</td></tr>
            <tr><td>--spacing-md</td><td>16px</td><td>Standard spacing, card padding</td></tr>
            <tr><td>--spacing-lg</td><td>24px</td><td>Section spacing</td></tr>
            <tr><td>--spacing-xl</td><td>32px</td><td>Large gaps, page margins</td></tr>
            <tr><td>--spacing-xxl</td><td>48px</td><td>Section separation</td></tr>
          </tbody>
        </TokenTable>

        <Title as="h3" size="lg">Border Radius</Title>
        <TokenTable>
          <thead>
            <tr>
              <th>Token</th>
              <th>Value</th>
              <th>Usage</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>--radius-sm</td><td>4px</td><td>Small elements, tags</td></tr>
            <tr><td>--radius-md</td><td>8px</td><td>Buttons, form elements</td></tr>
            <tr><td>--radius-lg</td><td>12px</td><td>Cards, containers</td></tr>
            <tr><td>--radius-round</td><td>50%</td><td>Circular elements, avatars</td></tr>
          </tbody>
        </TokenTable>
      </ComponentSection>

      {/* COLORS */}
      <ComponentSection id="colors">
        <Title as="h2" size="xxl">Color Palette</Title>
        <Text>Primary colors and semantic color meanings throughout the design system.</Text>

        <ColorPalette>
          <div>
            <Title as="h4" size="md">Primary</Title>
            <ColorSwatch color="#0B24F5" />
          </div>
          <div>
            <Title as="h4" size="md">Secondary</Title>
            <ColorSwatch color="#FF4575" />
          </div>
          <div>
            <Title as="h4" size="md">Background</Title>
            <ColorSwatch color="#ffffff" />
          </div>
          <div>
            <Title as="h4" size="md">Text</Title>
            <ColorSwatch color="#000000" />
          </div>
          <div>
            <Title as="h4" size="md">Light Background</Title>
            <ColorSwatch color="#FFECEA" />
          </div>
          <div>
            <Title as="h4" size="md">Dark Background</Title>
            <ColorSwatch color="#2d3748" />
          </div>
        </ColorPalette>
      </ComponentSection>

      {/* TYPOGRAPHY */}
      <ComponentSection id="typography">
        <Title as="h2" size="xxl">Typography</Title>
        <Text>Text styles and hierarchy for clear communication and accessibility.</Text>

        <ExampleGrid>
          <ComponentShowcase
            title="Title Sizes"
            description="Heading hierarchy from huge to small"
            code={`<Title size="huge">Huge Title (80px)</Title>
<Title size="xxl">XXL Title (64px)</Title>
<Title size="xl">XL Title (56px)</Title>
<Title size="lg">Large Title (40px)</Title>
<Title size="md">Medium Title (32px)</Title>
<Title size="sm">Small Title (24px)</Title>`}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <Title size="huge">Huge Title</Title>
              <Title size="xxl">XXL Title</Title>
              <Title size="xl">XL Title</Title>
              <Title size="lg">Large Title</Title>
              <Title size="md">Medium Title</Title>
              <Title size="sm">Small Title</Title>
            </div>
          </ComponentShowcase>

          <ComponentShowcase
            title="Text Sizes & Weights"
            description="Body text variations for content"
            code={`<Text size="huge" weight="bold">Huge Bold Text</Text>
<Text size="xl" weight="semibold">XL Semibold Text</Text>
<Text size="lg" weight="medium">Large Medium Text</Text>
<Text size="md" weight="normal">Medium Normal Text</Text>
<Text size="sm" weight="light">Small Light Text</Text>`}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <Text size="huge" weight="bold">Huge Bold Text</Text>
              <Text size="xl" weight="semibold">XL Semibold Text</Text>
              <Text size="lg" weight="medium">Large Medium Text</Text>
              <Text size="md" weight="normal">Medium Normal Text</Text>
              <Text size="sm" weight="light">Small Light Text</Text>
            </div>
          </ComponentShowcase>

          <ComponentShowcase
            title="Semantic Headings"
            description="Proper HTML heading structure"
            code={`<Title as="h1" size="huge">Page Title (H1)</Title>
<Title as="h2" size="xl">Section Title (H2)</Title>
<Title as="h3" size="lg">Subsection (H3)</Title>
<Title as="h4" size="md">Component Title (H4)</Title>`}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <Title as="h1" size="huge">Page Title (H1)</Title>
              <Title as="h2" size="xl">Section Title (H2)</Title>
              <Title as="h3" size="lg">Subsection (H3)</Title>
              <Title as="h4" size="md">Component Title (H4)</Title>
            </div>
          </ComponentShowcase>
        </ExampleGrid>
      </ComponentSection>

      {/* BUTTONS */}
      <ComponentSection id="buttons">
        <Title as="h2" size="xxl">Buttons</Title>
        <Text>Interactive elements for triggering actions and navigation.</Text>

        <ExampleGrid>
          <ComponentShowcase
            title="Button Variants"
            description="Different visual styles for different contexts"
            code={`<Button variant="primary">Primary Action</Button>
<Button variant="secondary">Secondary Action</Button>
<Button variant="outline">Outline Button</Button>
<Button variant="ghost">Ghost Button</Button>`}
          >
            <Button variant="primary">Primary Action</Button>
            <Button variant="secondary">Secondary Action</Button>
            <Button variant="outline">Outline Button</Button>
            <Button variant="ghost">Ghost Button</Button>
          </ComponentShowcase>

          <ComponentShowcase
            title="Button Sizes"
            description="Small, medium, and large button sizes"
            code={`<Button size="sm">Small Button</Button>
<Button size="md">Medium Button</Button>
<Button size="lg">Large Button</Button>`}
          >
            <Button size="sm">Small Button</Button>
            <Button size="md">Medium Button</Button>
            <Button size="lg">Large Button</Button>
          </ComponentShowcase>

          <ComponentShowcase
            title="Button States"
            description="Different states for user feedback"
            code={`<Button>Default State</Button>
<Button disabled>Disabled State</Button>
<Button loading>Loading State</Button>`}
          >
            <Button>Default State</Button>
            <Button disabled>Disabled State</Button>
            <Button loading>Loading State</Button>
          </ComponentShowcase>

          <ComponentShowcase
            title="Icon Buttons"
            description="Buttons with icons for better UX"
            code={`<Button icon="Github">View on GitHub</Button>
<Button iconOnly ariaLabel="Close dialog">
  <Icon name="Close" decorative />
</Button>`}
          >
            <Button icon="Github">View on GitHub</Button>
            <Button iconOnly ariaLabel="Close dialog">
              <Icon name="Close" decorative />
            </Button>
          </ComponentShowcase>
        </ExampleGrid>
      </ComponentSection>

      {/* ICONS */}
      <ComponentSection id="icons">
        <Title as="h2" size="xxl">Icons</Title>
        <Text>Scalable vector icons for UI elements and visual communication.</Text>

        <Title as="h3" size="lg">Available Icons</Title>
        <IconGrid>
          {availableIcons.map(iconName => (
            <IconCard key={iconName}>
              <Icon name={iconName} size="l" />
              <br />
              <span>{iconName}</span>
            </IconCard>
          ))}
        </IconGrid>

        <ExampleGrid>
          <ComponentShowcase
            title="Icon Sizes"
            description="Small (16px), medium (24px), and large (32px)"
            code={`<Icon name="Github" size="s" />
<Icon name="Github" size="m" />
<Icon name="Github" size="l" />`}
          >
            <Icon name="Github" size="s" />
            <Icon name="Github" size="m" />
            <Icon name="Github" size="l" />
          </ComponentShowcase>

          <ComponentShowcase
            title="Colored Icons"
            description="Icons with custom colors"
            code={`<Icon name="Github" color="var(--title-color)" />
<Icon name="Globe" color="#FF4575" />
<Icon name="Doc" color="#28a745" />`}
          >
            <Icon name="Github" color="var(--title-color)" />
            <Icon name="Globe" color="#FF4575" />
            <Icon name="Doc" color="#28a745" />
          </ComponentShowcase>

          <ComponentShowcase
            title="Accessible Icons"
            description="Proper accessibility implementation"
            code={`<Icon name="Github" ariaLabel="View GitHub repository" />
<Icon name="Doc" ariaLabel="Download document" />
<Icon name="ArrowDown" decorative />`}
          >
            <Icon name="Github" ariaLabel="View GitHub repository" />
            <Icon name="Doc" ariaLabel="Download document" />
            <Icon name="ArrowDown" decorative />
          </ComponentShowcase>
        </ExampleGrid>
      </ComponentSection>

      {/* TAGS */}
      <ComponentSection id="tags">
        <Title as="h2" size="xxl">Tags</Title>
        <Text>Small labels for categorization and status indication.</Text>

        <ExampleGrid>
          <ComponentShowcase
            title="Basic Tags"
            description="Simple tags for labeling and categorization"
            code={`<Tag>React</Tag>
<Tag>TypeScript</Tag>
<Tag>Styled Components</Tag>
<Tag>JavaScript</Tag>`}
          >
            <Tag>React</Tag>
            <Tag>TypeScript</Tag>
            <Tag>Styled Components</Tag>
            <Tag>JavaScript</Tag>
          </ComponentShowcase>

          <ComponentShowcase
            title="Interactive Tags"
            description="Clickable tags for filtering and selection"
            code={`<Tag onClick={() => alert('Filter applied!')}>
  Clickable Filter
</Tag>
<Tag selected>Selected Tag</Tag>
<Tag onClick={() => {}}>Frontend</Tag>`}
          >
            <Tag onClick={() => alert('Filter applied!')}>Clickable Filter</Tag>
            <Tag selected>Selected Tag</Tag>
            <Tag onClick={() => {}}>Frontend</Tag>
          </ComponentShowcase>

          <ComponentShowcase
            title="Tag States"
            description="Different states for user feedback"
            code={`<Tag>Default State</Tag>
<Tag selected>Selected State</Tag>
<Tag disabled>Disabled State</Tag>`}
          >
            <Tag>Default State</Tag>
            <Tag selected>Selected State</Tag>
            <Tag disabled>Disabled State</Tag>
          </ComponentShowcase>
        </ExampleGrid>
      </ComponentSection>

      {/* CARDS */}
      <ComponentSection id="cards">
        <Title as="h2" size="xxl">Cards</Title>
        <Text>Containers for displaying related information in a structured layout.</Text>

        <ExampleGrid>
          <ComponentShowcase
            title="Project Card"
            description="Showcase projects with image, title, description, and tags"
            code={`<ProjectCard
  project={{
    name: "Portfolio Website",
    description: "A responsive portfolio built with React and TypeScript, featuring a custom design system and accessibility-first approach.",
    image: "/project-image.jpg",
    tags: ["React", "TypeScript", "Styled Components", "Vite"],
    netlify: "https://portfolio.netlify.app",
    github: "https://github.com/daniel/portfolio"
  }}
/>`}
          >
            <div style={{ maxWidth: '400px' }}>
              <ProjectCard
                project={{
                  name: "Portfolio Website",
                  description: "A responsive portfolio built with React and TypeScript, featuring a custom design system and accessibility-first approach.",
                  image: "/project-image.jpg",
                  tags: ["React", "TypeScript", "Styled Components", "Vite"],
                  netlify: "https://portfolio.netlify.app",
                  github: "https://github.com/daniel/portfolio"
                }}
              />
            </div>
          </ComponentShowcase>

          <ComponentShowcase
            title="Article Card"
            description="Display articles and blog posts with metadata"
            code={`<ArticleCard
  article={{
    title: "Building Accessible Components",
    summary: "A guide to creating React components that work for everyone, including users with disabilities.",
    image: "/article-image.jpg",
    link: "https://example.com/accessible-components"
  }}
/>`}
          >
            <div style={{ maxWidth: '400px' }}>
              <ArticleCard
                article={{
                  title: "Building Accessible Components",
                  summary: "A guide to creating React components that work for everyone, including users with disabilities.",
                  image: "/article-image.jpg",
                  link: "https://example.com/accessible-components"
                }}
              />
            </div>
          </ComponentShowcase>

          <ComponentShowcase
            title="Basic Card"
            description="Generic container for custom content"
            code={`<Card>
  <Title size="md">Card Title</Title>
  <Text>This is a basic card container that can hold any content you need.</Text>
  <Button variant="outline" size="sm">Learn More</Button>
</Card>`}
          >
            <Card>
              <Title size="md">Card Title</Title>
              <Text>This is a basic card container that can hold any content you need.</Text>
              <Button variant="outline" size="sm">Learn More</Button>
            </Card>
          </ComponentShowcase>
        </ExampleGrid>
      </ComponentSection>

      {/* LAYOUT */}
      <ComponentSection id="layout">
        <Title as="h2" size="xxl">Layout Components</Title>
        <Text>Structural components for organizing content and creating responsive layouts.</Text>

        <ExampleGrid>
          <ComponentShowcase
            title="Grid System"
            description="Responsive grid layout with customizable columns"
            code={`<Grid columns={3} gap="md">
  <GridItem>
    <Card>Grid Item 1</Card>
  </GridItem>
  <GridItem>
    <Card>Grid Item 2</Card>
  </GridItem>
  <GridItem>
    <Card>Grid Item 3</Card>
  </GridItem>
</Grid>`}
          >
            <Grid columns={3} gap="md">
              <GridItem>
                <Card style={{ textAlign: 'center', padding: '16px' }}>Grid Item 1</Card>
              </GridItem>
              <GridItem>
                <Card style={{ textAlign: 'center', padding: '16px' }}>Grid Item 2</Card>
              </GridItem>
              <GridItem>
                <Card style={{ textAlign: 'center', padding: '16px' }}>Grid Item 3</Card>
              </GridItem>
            </Grid>
          </ComponentShowcase>

          <ComponentShowcase
            title="Section Container"
            description="Semantic sections with built-in styling and accessibility"
            code={`<Section
  id="example"
  variant="projects"
  title="Section Title"
  text="Optional section description"
>
  <Text>Section content goes here...</Text>
</Section>`}
          >
            <Section
              id="example"
              variant="projects"
              title="Section Title"
              text="Optional section description"
              hideTitle={true}
            >
              <Text>Section content goes here...</Text>
            </Section>
          </ComponentShowcase>
        </ExampleGrid>
      </ComponentSection>

      {/* NAVIGATION */}
      <ComponentSection id="navigation">
        <Title as="h2" size="xxl">Navigation</Title>
        <Text>Components for helping users navigate and understand page structure.</Text>

        <ExampleGrid>
          <ComponentShowcase
            title="Skip Links"
            description="Accessibility links for keyboard navigation"
            code={`<SkipLink href="#main-content">
  Skip to main content
</SkipLink>
<SkipLink href="#navigation">
  Skip to navigation
</SkipLink>`}
          >
            <div style={{ position: 'relative', border: '1px dashed #ccc', padding: '20px' }}>
              <Text size="sm" style={{ marginBottom: '16px' }}>
                Press Tab to see skip links (they appear when focused)
              </Text>
              <SkipLink href="#main-content">Skip to main content</SkipLink>
              <SkipLink href="#navigation">Skip to navigation</SkipLink>
            </div>
          </ComponentShowcase>
        </ExampleGrid>
      </ComponentSection>

      {/* IMAGES */}
      <ComponentSection id="images">
        <Title as="h2" size="xxl">Images</Title>
        <Text>Image components with accessibility and performance optimizations.</Text>

        <ExampleGrid>
          <ComponentShowcase
            title="Avatar Component"
            description="Circular profile images with fallback support"
            code={`<Avatar
  src="/avatar.png"
  alt="Daniel's profile picture"
  width="80px"
  height="80px"
/>
<Avatar
  src="/missing-image.jpg"
  alt="Fallback avatar"
  width="80px"
  height="80px"
/>`}
          >
            <Avatar
              src="/avatar.png"
              alt="Daniel's profile picture"
              width="80px"
              height="80px"
            />
            <Avatar
              src="/missing-image.jpg"
              alt="Fallback avatar"
              width="80px"
              height="80px"
            />
          </ComponentShowcase>

          <ComponentShowcase
            title="Responsive Images"
            description="Images with lazy loading and accessibility"
            code={`<Image
  src="/project-image.jpg"
  alt="Project screenshot"
  loading="lazy"
  width="200px"
/>
<Image
  src="/decorative-image.jpg"
  decorative={true}
  width="200px"
/>`}
          >
            <Image
              src="/project-image.jpg"
              alt="Project screenshot"
              loading="lazy"
              width="200px"
            />
          </ComponentShowcase>
        </ExampleGrid>
      </ComponentSection>

      {/* USAGE GUIDELINES */}
      <ComponentSection id="guidelines">
        <Title as="h2" size="xxl">Usage Guidelines</Title>
        <Text>Best practices for using the design system components.</Text>

        <div style={{ marginTop: '32px' }}>
          <Title as="h3" size="lg">Accessibility First</Title>
          <Text>
            All components follow WCAG 2.1 AA guidelines and include proper ARIA attributes, 
            keyboard navigation support, and screen reader compatibility.
          </Text>

          <Title as="h3" size="lg">Responsive Design</Title>
          <Text>
            Components are built with mobile-first responsive design principles and 
            work seamlessly across all device sizes.
          </Text>

          <Title as="h3" size="lg">Consistent Styling</Title>
          <Text>
            Use design tokens (CSS custom properties) for consistent spacing, colors, 
            and typography throughout your application.
          </Text>

          <Title as="h3" size="lg">Performance</Title>
          <Text>
            Components are optimized for performance with lazy loading, efficient renders, 
            and minimal bundle size impact.
          </Text>
        </div>
      </ComponentSection>

      {/* FOOTER */}
      <div style={{ textAlign: 'center', padding: '48px 0', borderTop: '1px solid #e9ecef', marginTop: '48px' }}>
        <Text size="sm" style={{ color: '#6c757d' }}>
          Design System by Daniel Lauding • Built with React, TypeScript & Styled Components
        </Text>
      </div>
    </StyleGuideContainer>
  );
};