import { Container, Grid } from '@mantine/core';

export default function HomePage() {
  return (
    <Container my="md">
      {/* mantine image gallery responsive */}
      <Grid gutter="md" columns={3}>
        {/* mantine image gallery responsive */}
        <div>Image 1</div>
        <div>Image 2</div>
        <div>Image 3</div>
        <div>Image 4</div>
        <div>Image 5</div>
        <div>Image 6</div>
        <div>Image 7</div>
        <div>Image 8</div>
        <div>Image 9</div>
        <div>Image 10</div>
      </Grid>
    </Container>
  );
}
