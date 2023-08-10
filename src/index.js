const { withOptions } = require('tailwindcss/plugin');

const layoutCss = withOptions((options = {}) => {
  const defaults = {
    pageHeightDefaultFill: true,
    pageWidthDefaultFill: true,
  };

  const _options = { ...defaults, ...options };

  return ({ addComponents, matchComponents, theme }) => {
    matchComponents(
      /* Content Resizing Fixed */
      {
        'w-fixed': (value) => ({
          flexGrow: '0',
          flexShrink: '0',
          width: value,
        }),
        'h-fixed': (value) => ({
          flexGrow: '0',
          flexShrink: '1',
          height: value,
        }),
      },
      { values: theme('space') }
    );
    matchComponents(
      /* Content Resizing Fixed */
      {
        'w-max': (value) => ({
          flexGrow: '1',
          flexShrink: '1',
          maxWidth: value,
        }),
      },
      { values: theme('maxWidth') }
    );
    matchComponents(
      /* Content Resizing Fixed */
      {
        'h-max': (value) => ({
          flexGrow: '1',
          flexShrink: '1',
          maxHeight: value,
        }),
      },
      { values: theme('maxHeight') }
    );
    matchComponents(
      /* Content Resizing Min */
      {
        'w-min': (value) => ({
          flexShrink: '0',
          minWidth: value,
        }),
      },
      {
        'h-min': (value) => ({
          flexShrink: '0',
          minHeight: value,
        }),
      },
      { values: theme('space') }
    );

    const components = {
      'html, body': {
        width: _options.pageWidthDefaultFill ? '100%' : 'revert',
        height: _options.pageHeightDefaultFill ? '100%' : 'revert',
      },
      /* Content Sizing */
      '.w-hug': {
        width: 'fit-content',
      },

      '.h-hug': {
        height: 'fit-content',
      },

      '.w-foo': {
        flexGrow: '1',
        flexShrink: '0',
        maxWidth: '94rem',
      },

      '.s-hug': {
        width: 'fit-content',
        height: 'fit-content',
      },

      '.w-fill': {
        width: ['100%', '-moz-available', '-webkit-fill-available', 'stretch'],
      },

      '* > .h-fill': {
        height: '100%',
      },

      '.layout-packed-tl-x > .h-fill, .layout-packed-tc-x > .h-fill, .layout-packed-tr-x > .h-fill, .layout-packed-ml-x > .h-fill, .layout-packed-mc-x > .h-fill, .layout-packed-mr-x > .h-fill, .layout-packed-bl-x > .h-fill, .layout-packed-bc-x > .h-fill, .layout-packed-br-x > .h-fill, .layout-spaced-t > .h-fill, .layout-spaced-m > .h-fill, .layout-spaced-b > .h-fill':
        {
          alignSelf: 'stretch',
          flexGrow: 'auto',
        },

      '.layout-packed-tl-y > .h-fill, .layout-packed-tc-y > .h-fill, .layout-packed-tr-y > .h-fill, .layout-packed-ml-y > .h-fill, .layout-packed-mc-y > .h-fill, .layout-packed-mr-y > .h-fill, .layout-packed-bl-y > .h-fill, .layout-packed-bc-y > .h-fill, .layout-packed-br-y > .h-fill, .layout-spaced-l > .h-fill, .layout-spaced-c > .h-fill, .layout-spaced-r > .h-fill':
        {
          alignSelf: 'auto',
          flexGrow: '1',
        },

      '.layout-grid-tl > .h-fill, .layout-grid-tc > .h-fill, .layout-grid-tr > .h-fill, .layout-grid-ml > .h-fill, .layout-grid-mc > .h-fill, .layout-grid-mr > .h-fill, .layout-grid-bl > .h-fill, .layout-grid-bc > .h-fill, .layout-grid-br > .h-fill':
        {
          height: '100%',
        },

      '* > .s-fill': {
        height: '100%',
        width: ['100%', '-moz-available', '-webkit-fill-available', 'stretch'],
      },

      '.layout-packed-tl-x > .s-fill, .layout-packed-tc-x > .s-fill, .layout-packed-tr-x > .s-fill, .layout-packed-ml-x > .s-fill, .layout-packed-mc-x > .s-fill, .layout-packed-mr-x > .s-fill, .layout-packed-bl-x > .s-fill, .layout-packed-bc-x > .s-fill, .layout-packed-br-x > .s-fill, .layout-spaced-t > .s-fill, .layout-spaced-m > .s-fill, .layout-spaced-b > .s-fill':
        {
          alignSelf: 'stretch',
          flexGrow: 'auto',
          width: [
            '100%',
            '-moz-available',
            '-webkit-fill-available',
            'stretch',
          ],
        },

      '.layout-packed-tl-y > .s-fill, .layout-packed-tc-y > .s-fill, .layout-packed-tr-y > .s-fill, .layout-packed-ml-y > .s-fill, .layout-packed-mc-y > .s-fill, .layout-packed-mr-y > .s-fill, .layout-packed-bl-y > .s-fill, .layout-packed-bc-y > .s-fill, .layout-packed-br-y > .s-fill, .layout-spaced-l > .s-fill, .layout-spaced-c > .s-fill, .layout-spaced-r > .s-fill':
        {
          alignSelf: 'auto',
          flexGrow: '1',
          width: [
            '100%',
            '-moz-available',
            '-webkit-fill-available',
            'stretch',
          ],
        },

      '.layout-grid-tl > .s-fill, .layout-grid-tc > .s-fill, .layout-grid-tr > .s-fill, .layout-grid-ml > .s-fill, .layout-grid-mc > .s-fill, .layout-grid-mr > .s-fill, .layout-grid-bl > .s-fill, .layout-grid-bc > .s-fill, .layout-grid-br > .s-fill':
        {
          height: '100%',
          width: [
            '100%',
            '-moz-available',
            '-webkit-fill-available',
            'stretch',
          ],
        },

      '.s-initial': {
        height: 'initial',
        width: 'initial',
      },
      '.w-initial': {
        width: 'initial',
      },
      '.h-initial': {
        height: 'initial',
      },

      /* Layout Initial Html */
      '.layout-initial-html': {
        display: 'initial',
        flexDirection: 'initial',
        justifyContent: 'initial',
        alignItems: 'initial',
      },

      /* Layout Revert Html */
      '.layout-revert-html': {
        display: 'revert',
        flexDirection: 'revert',
        justifyContent: 'revert',
        alignItems: 'revert',
      },

      /* Layout Horizontally Packed  */
      '.layout-packed-tl-x': {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
      },

      '.layout-packed-tc-x': {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
      },

      '.layout-packed-tr-x': {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
      },

      '.layout-packed-ml-x': {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
      },

      '.layout-packed-mc-x': {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },

      '.layout-packed-mr-x': {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
      },

      '.layout-packed-bl-x': {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
      },

      '.layout-packed-bc-x': {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
      },

      '.layout-packed-br-x': {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
      },

      /* Layout Vertically Packed  */
      '.layout-packed-tl-y': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
      },

      '.layout-packed-tc-y': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
      },

      '.layout-packed-tr-y': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
      },

      '.layout-packed-ml-y': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
      },

      '.layout-packed-mc-y': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      },

      '.layout-packed-mr-y': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-end',
      },

      '.layout-packed-bl-y': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
      },

      '.layout-packed-bc-y': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
      },

      '.layout-packed-br-y': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
      },

      /* Layout Horizontally Spaced */
      '.layout-spaced-t': {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
      },

      '.layout-spaced-m': {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },

      '.layout-spaced-b': {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
      },

      /* Layout Vertically Spaced */
      '.layout-spaced-l': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
      },

      '.layout-spaced-c': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
      },

      '.layout-spaced-r': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
      },

      /* Layout Grid */
      '.layout-grid-tl': {
        display: 'grid',
        alignItems: 'start',
        justifyItems: 'start',
      },

      '.layout-grid-tc': {
        display: 'grid',
        alignItems: 'start',
        justifyItems: 'center',
      },

      '.layout-grid-tr': {
        display: 'grid',
        alignItems: 'start',
        justifyItems: 'end',
      },

      '.layout-grid-ml': {
        display: 'grid',
        alignItems: 'center',
        justifyItems: 'start',
      },

      '.layout-grid-mc': {
        display: 'grid',
        alignItems: 'center',
        justifyItems: 'center',
      },

      '.layout-grid-mr': {
        display: 'grid',
        alignItems: 'center',
        justifyItems: 'end',
      },

      '.layout-grid-bl': {
        display: 'grid',
        alignItems: 'end',
        justifyItems: 'start',
      },

      '.layout-grid-bc': {
        display: 'grid',
        alignItems: 'end',
        justifyItems: 'center',
      },

      '.layout-grid-br': {
        display: 'grid',
        alignItems: 'end',
        justifyItems: 'end',
      },
    };

    addComponents(components);
  };
});

export default layoutCss;
