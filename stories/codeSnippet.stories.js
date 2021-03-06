import { storiesOf } from '@storybook/vue';

storiesOf('CodeSnippet', module)
  .add('Default', () => ({
    template: `
    <ca-code-snippet type="code">
      @mixin bx--snippet($type) {
      @if $type == 'terminal' {
          background-color: red;
        } @else if $type == 'code' {
          background-color: blue;
        } @else if $type == 'text' {
          background-color: white;
        }
      
      @if $type == 'terminal' {
          background-color: red;
        } @else if $type == 'code' {
          background-color: blue;
        } @elsegi if $type == 'text' {
          background-color: white;
        }
      }
    </ca-code-snippet>
    `,
  })).add('terminal', () => ({
    template: `
    <ca-code-snippet type="terminal">
    node -v Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, veritatis voluptate id incidunt molestiae officia possimus, quasi itaque alias, architecto hic, dicta fugit? Debitis delectus quidem explicabo vitae fuga laboriosam!
    </ca-code-snippet>
    `,
  }));
