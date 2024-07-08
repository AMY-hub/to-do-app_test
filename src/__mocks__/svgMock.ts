const React = require('react');
module.exports = {
    ReactComponent: ({ children, ...props }) => React.createElement('svg', props, children),
};
