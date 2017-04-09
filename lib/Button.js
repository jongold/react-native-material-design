Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactNative = require("react-native");

var _reactPrimitives = require("react-primitives");

var _Ripple = require("./polyfill/Ripple");

var _Ripple2 = _interopRequireDefault(_Ripple);

var _config = require("./config");

var _helpers = require("./helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = function (_Component) {
    _inherits(Button, _Component);

    function Button(props) {
        _classCallCheck(this, Button);

        var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, props));

        _this.setElevation = function () {
            _this.setState({
                elevation: 4
            });
        };

        _this.removeElevation = function () {
            _this.setState({
                elevation: 2
            });
        };

        _this.state = {
            elevation: 2
        };
        return _this;
    }

    _createClass(Button, [{
        key: "shouldComponentUpdate",
        value: function () {
            function shouldComponentUpdate(nextProps, nextState) {
                return nextProps.text !== this.props.text || nextProps.value !== this.props.value || nextProps.loading !== this.props.loading || nextProps.disabled !== this.props.disabled;
            }

            return shouldComponentUpdate;
        }()
    }, {
        key: "render",
        value: function () {
            function render() {
                var elevation = this.state.elevation;
                var _props = this.props,
                    text = _props.text,
                    value = _props.value,
                    theme = _props.theme,
                    primary = _props.primary,
                    overrides = _props.overrides,
                    disabled = _props.disabled,
                    loading = _props.loading,
                    raised = _props.raised,
                    styles = _props.styles,
                    onPress = _props.onPress,
                    onLongPress = _props.onLongPress;


                var textStyleMap = {
                    flat: {
                        light: {
                            normal: {
                                color: (0, _helpers.getColor)(primary)
                            },
                            disabled: {
                                color: 'rgba(0,0,0,.26)'
                            }
                        },
                        dark: {
                            normal: {
                                color: (0, _helpers.getColor)(primary)
                            },
                            disabled: {
                                color: 'rgba(255,255,255,.3)'
                            }
                        }
                    },
                    raised: {
                        light: {
                            normal: {
                                color: (0, _helpers.getColor)(primary)
                            },
                            disabled: {
                                color: 'rgba(0,0,0,.26)'
                            }
                        },
                        dark: {
                            normal: {
                                color: '#fff'
                            },
                            disabled: {
                                color: 'rgba(255,255,255,.3)'
                            }
                        }
                    }
                };

                var buttonStyleMap = {
                    raised: {
                        light: {
                            normal: {
                                backgroundColor: '#fff',
                                borderColor: 'rgba(0,0,0,.12)'
                            },
                            disabled: {
                                backgroundColor: 'rgba(0,0,0,.12)',
                                borderWidth: 1,
                                borderColor: 'rgba(0,0,0,.12)'
                            }
                        },
                        dark: {
                            normal: {
                                backgroundColor: (0, _helpers.getColor)(primary),
                                borderWidth: 1,
                                borderColor: 'rgba(0,0,0,.12)'
                            },
                            disabled: {
                                backgroundColor: 'rgba(255,255,255,.12)',
                                borderWidth: 1,
                                borderColor: 'rgba(0,0,0,.12)'
                            }
                        }
                    }
                };

                var rippleColorMap = {
                    flat: {
                        light: {
                            normal: 'rgba(153,153,153,.4)',
                            disabled: 'rgba(0,0,0,0.06)'
                        },
                        dark: {
                            normal: 'rgba(204,204,204,.25)',
                            disabled: 'rgba(255,255,255,0.06)'
                        }
                    },
                    raised: {
                        light: {
                            normal: 'rgba(153,153,153,.4)',
                            disabled: 'rgba(0,0,0,.06)'
                        },
                        dark: {
                            normal: (0, _helpers.getColor)(String(primary) + "700"),
                            disabled: 'rgba(255,255,255,.06)'
                        }
                    }
                };

                var type = disabled ? 'disabled' : 'normal';
                var shape = raised ? 'raised' : 'flat';

                var textStyle = function () {
                    if (disabled || !(overrides && overrides.textColor)) {
                        return textStyleMap[shape][theme][type];
                    }

                    return { color: (0, _helpers.getColor)(overrides.textColor) };
                }();

                var buttonStyle = function () {
                    if (raised) {
                        if (disabled || !(overrides && overrides.backgroundColor)) {
                            return buttonStyleMap[shape][theme][type];
                        }

                        return Object.assign(buttonStyleMap[shape][theme][type], { backgroundColor: (0, _helpers.getColor)(overrides.backgroundColor) });
                    }

                    return null;
                }();

                var rippleColor = function () {
                    if (disabled || !(overrides && overrides.rippleColor)) {
                        return rippleColorMap[shape][theme][type];
                    }

                    return (0, _helpers.getColor)(overrides.rippleColor);
                }();

                if (disabled || loading) {
                    return _react2["default"].createElement(
                        _reactPrimitives.View,
                        {
                            style: [componentStyles.button, buttonStyle, {
                                backgroundColor: buttonStyle && buttonStyle.backgroundColor
                            }, styles.button, styles.disabled]
                        },
                        loading ? _react2["default"].createElement(_reactNative.ActivityIndicator, { animating: this.props.loading, style: componentStyles.spinner, color: this.props.activityIndicatorColor }) : _react2["default"].createElement(
                            _reactPrimitives.Text,
                            { style: [_config.TYPO.paperFontButton, textStyle, componentStyles.text, styles.text] },
                            text || value,
                            this.props.children
                        )
                    );
                }

                if (!(0, _helpers.isCompatible)('TouchableNativeFeedback')) {
                    return _react2["default"].createElement(
                        _Ripple2["default"],
                        {
                            elevation: raised ? [2, 4] : null,
                            rippleColor: rippleColor,
                            onPress: !disabled ? onPress : null,
                            onLongPress: !disabled ? onLongPress : null,
                            style: [componentStyles.button, buttonStyle, {
                                backgroundColor: buttonStyle && buttonStyle.backgroundColor
                            }, raised && !(0, _helpers.isCompatible)('elevation') && _reactPrimitives.Platform.OS !== 'ios' && {
                                borderWidth: 1,
                                borderColor: 'rgba(0,0,0,.12)'
                            }, styles.button]
                        },
                        _react2["default"].createElement(
                            _reactPrimitives.Text,
                            { style: [_config.TYPO.paperFontButton, textStyle, componentStyles.text, styles.text] },
                            text || value,
                            this.props.children
                        )
                    );
                }

                return _react2["default"].createElement(
                    _reactNative.TouchableNativeFeedback,
                    {
                        background: _reactNative.TouchableNativeFeedback.Ripple(rippleColor),
                        onPress: !disabled ? onPress : null,
                        onLongPress: !disabled ? onLongPress : null,
                        onPressIn: raised ? this.setElevation : null,
                        onPressOut: raised ? this.removeElevation : null
                    },
                    _react2["default"].createElement(
                        _reactPrimitives.View,
                        { style: [componentStyles.button, buttonStyle, {
                                backgroundColor: buttonStyle && buttonStyle.backgroundColor,
                                elevation: raised ? elevation : 0
                            }, styles.button]
                        },
                        _react2["default"].createElement(
                            _reactPrimitives.Text,
                            { style: [_config.TYPO.paperFontButton, textStyle, componentStyles.text, styles.text] },
                            text || value
                        )
                    )
                );
            }

            return render;
        }()
    }]);

    return Button;
}(_react.Component);

Button.propTypes = {
    text: _react.PropTypes.string.isRequired,
    theme: _react.PropTypes.oneOf(_config.THEME_NAME),
    primary: _react.PropTypes.oneOf(_config.PRIMARY_COLORS),
    overrides: _react.PropTypes.shape({
        textColor: _react.PropTypes.string,
        backgroundColor: _react.PropTypes.string,
        rippleColor: _react.PropTypes.string
    }),
    disabled: _react.PropTypes.bool,
    loading: _react.PropTypes.bool,
    activityIndicatorColor: _react.PropTypes.string,
    raised: _react.PropTypes.bool,
    styles: _react.PropTypes.shape({
        button: _reactPrimitives.View.propTypes.style,
        disabled: _reactPrimitives.View.propTypes.style,
        text: _reactPrimitives.Text.propTypes.style
    }),
    onPress: _react.PropTypes.func,
    onLongPress: _react.PropTypes.func
};
Button.defaultProps = {
    theme: 'light',
    primary: _config.PRIMARY,
    disabled: false,
    loading: false,
    raised: false,
    activityIndicatorColor: 'black',
    styles: {
        disabled: { opacity: 0.5 }
    }
};
exports["default"] = Button;


var componentStyles = {
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 6,
        paddingHorizontal: 16,
        margin: 6,
        borderRadius: 2
    },
    text: {
        lineHeight: 20
    },
    spinner: {
        alignSelf: 'center'
    }
};