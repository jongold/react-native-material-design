Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

require("react-native");

var _reactPrimitives = require("react-primitives");

var _config = require("./config");

var _helpers = require("./helpers");

var _Icon = require("./Icon");

var _Icon2 = _interopRequireDefault(_Icon);

var _IconToggle = require("./IconToggle");

var _IconToggle2 = _interopRequireDefault(_IconToggle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Toolbar = function (_Component) {
    _inherits(Toolbar, _Component);

    function Toolbar() {
        _classCallCheck(this, Toolbar);

        return _possibleConstructorReturn(this, (Toolbar.__proto__ || Object.getPrototypeOf(Toolbar)).apply(this, arguments));
    }

    _createClass(Toolbar, [{
        key: "render",
        value: function () {
            function render() {
                var _props = this.props,
                    title = _props.title,
                    theme = _props.theme,
                    primary = _props.primary,
                    style = _props.style,
                    leftIconStyle = _props.leftIconStyle,
                    rightIconStyle = _props.rightIconStyle,
                    elevation = _props.elevation,
                    overrides = _props.overrides,
                    icon = _props.icon,
                    onIconPress = _props.onIconPress,
                    actions = _props.actions,
                    onLayout = _props.onLayout;


                var themeMap = {
                    light: {
                        backgroundColor: '#ffffff',
                        color: 'rgba(0,0,0,.87)',
                        leftIconColor: 'rgba(0,0,0,.54)',
                        rightIconColor: 'rgba(0,0,0,.54)'
                    },
                    dark: {
                        backgroundColor: (0, _helpers.getColor)(primary),
                        color: 'rgba(255,255,255,.87)',
                        leftIconColor: 'rgba(255,255,255,.87)',
                        rightIconColor: 'rgba(255,255,255,.87)'
                    }
                };

                var opacityMap = {
                    light: .38,
                    dark: .30
                };

                var styleMap = {
                    backgroundColor: overrides && overrides.backgroundColor ? (0, _helpers.getColor)(overrides.backgroundColor) : themeMap[theme].backgroundColor,
                    color: overrides && overrides.color ? (0, _helpers.getColor)(overrides.color) : themeMap[theme].color,
                    leftIconColor: overrides && overrides.leftIconColor ? (0, _helpers.getColor)(overrides.leftIconColor) : themeMap[theme].leftIconColor,
                    rightIconColor: overrides && overrides.rightIconColor ? (0, _helpers.getColor)(overrides.rightIconColor) : themeMap[theme].rightIconColor
                };

                return _react2["default"].createElement(
                    _reactPrimitives.View,
                    { style: [styles.toolbar, { backgroundColor: styleMap.backgroundColor, elevation: elevation }, style], onLayout: onLayout },
                    icon && _react2["default"].createElement(
                        _IconToggle2["default"],
                        {
                            color: styleMap.leftIconColor,
                            onPress: onIconPress
                        },
                        _react2["default"].createElement(_Icon2["default"], { name: icon || 'menu',
                            size: 24,
                            color: styleMap.leftIconColor,
                            style: [styles.leftIcon, leftIconStyle]
                        })
                    ),
                    !title ? this.props.children : _react2["default"].createElement(
                        _reactPrimitives.Text,
                        {
                            numberOfLines: 1,
                            style: [styles.title, _config.TYPO.paperFontTitle, {
                                color: styleMap.color,
                                marginLeft: icon ? styles.title.marginLeft : 16
                            }]
                        },
                        title
                    ),
                    actions && actions.map(function (action, i) {
                        return _react2["default"].createElement(
                            _IconToggle2["default"],
                            {
                                key: i,
                                color: styleMap.rightIconColor,
                                badge: action.badge,
                                onPress: action.onPress,
                                disabled: action.disabled,
                                onLayout: action.onLayout
                            },
                            _react2["default"].createElement(_Icon2["default"], { name: action.icon,
                                size: 24,
                                color: styleMap.rightIconColor,
                                style: [styles.rightIcon, rightIconStyle, action.disabled ? { opacity: opacityMap[theme] } : null]
                            })
                        );
                    })
                );
            }

            return render;
        }()
    }]);

    return Toolbar;
}(_react.Component);

Toolbar.propTypes = {
    title: _react.PropTypes.string,
    theme: _react.PropTypes.oneOf(_config.THEME_NAME),
    primary: _react.PropTypes.oneOf(_config.PRIMARY_COLORS),
    style: _reactPrimitives.View.propTypes.style,
    leftIconStyle: _react.PropTypes.object,
    rightIconStyle: _react.PropTypes.object,
    elevation: _react.PropTypes.number,
    overrides: _react.PropTypes.shape({
        backgroundColor: _react.PropTypes.string,
        titleColor: _react.PropTypes.string,
        leftIconColor: _react.PropTypes.string,
        rightIconColor: _react.PropTypes.string
    }),
    icon: _react.PropTypes.string,
    onIconPress: _react.PropTypes.func,
    actions: _react.PropTypes.arrayOf(_react.PropTypes.shape({
        icon: _react.PropTypes.string.isRequired,
        onPress: _react.PropTypes.func,
        counter: _react.PropTypes.shape(),
        onLayout: _react.PropTypes.func
    })),
    onLayout: _react.PropTypes.func
};
Toolbar.defaultProps = {
    theme: 'dark',
    primary: _config.PRIMARY,
    elevation: 4
};
exports["default"] = Toolbar;


var styles = {
    toolbar: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 56,
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        flex: 1,
        marginLeft: 16
    },
    leftIcon: {
        margin: 16
    },
    rightIcon: {
        margin: 16
    }
};