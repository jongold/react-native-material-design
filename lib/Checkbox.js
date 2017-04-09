Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactNative = require("react-native");

var _reactPrimitives = require("react-primitives");

var _config = require("./config");

var _Icon = require("./Icon");

var _Icon2 = _interopRequireDefault(_Icon);

var _IconToggle = require("./IconToggle");

var _IconToggle2 = _interopRequireDefault(_IconToggle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var typos = _reactPrimitives.StyleSheet.create(_config.TYPO);

var Checkbox = function (_Component) {
    _inherits(Checkbox, _Component);

    function Checkbox() {
        _classCallCheck(this, Checkbox);

        return _possibleConstructorReturn(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).apply(this, arguments));
    }

    _createClass(Checkbox, [{
        key: "render",
        value: function () {
            function render() {
                var _props = this.props,
                    theme = _props.theme,
                    primary = _props.primary,
                    checked = _props.checked,
                    disabled = _props.disabled,
                    value = _props.value,
                    onCheck = _props.onCheck;


                var status = function () {
                    if (disabled) {
                        return 'disabled';
                    } else if (checked) {
                        return 'checked';
                    } else {
                        return 'default';
                    }
                }();

                var colorMap = {
                    light: {
                        disabled: '#000000',
                        checked: (_config.COLOR[String(primary) + "500"] || {}).color || primary,
                        "default": '#000000'
                    },
                    dark: {
                        disabled: '#ffffff',
                        checked: (_config.COLOR[String(primary) + "500"] || {}).color || primary,
                        "default": '#ffffff'
                    }
                };

                var opacityMap = {
                    light: {
                        checked: 1,
                        "default": 0.54,
                        disabled: 0.26
                    },
                    dark: {
                        checked: 1,
                        "default": 0.7,
                        disabled: 0.3
                    }
                };

                var underlayMap = {
                    light: 'rgba(0,0,0,.12)',
                    dark: 'rgba(255,255,255,.12)'
                };

                var labelColorMap = {
                    light: '#000000',
                    dark: '#ffffff'
                };

                var CURR_COLOR = colorMap[theme][status];
                var OPACITY = opacityMap[theme][status];
                var LABEL_COLOR = labelColorMap[theme];
                var UNDERLAY_COLOR = underlayMap[theme];

                return _react2["default"].createElement(
                    _reactNative.TouchableHighlight,
                    {
                        onPress: function () {
                            function onPress() {
                                disabled ? null : onCheck(!checked, value);
                            }

                            return onPress;
                        }(),
                        underlayColor: disabled ? 'rgba(0,0,0,0)' : UNDERLAY_COLOR,
                        activeOpacity: 1
                    },
                    _react2["default"].createElement(
                        _reactPrimitives.View,
                        { style: styles.container },
                        _react2["default"].createElement(
                            _IconToggle2["default"],
                            {
                                disabled: disabled,
                                color: CURR_COLOR,
                                onPress: function () {
                                    function onPress() {
                                        disabled ? null : onCheck(!checked, value);
                                    }

                                    return onPress;
                                }()
                            },
                            _react2["default"].createElement(_Icon2["default"], { name: checked ? 'check-box' : 'check-box-outline-blank',
                                size: 24,
                                color: CURR_COLOR,
                                key: value,
                                style: {
                                    opacity: OPACITY,
                                    margin: 16
                                }
                            })
                        ),
                        _react2["default"].createElement(
                            _reactPrimitives.View,
                            {
                                style: { alignItems: 'center',
                                    flexDirection: 'row',
                                    flex: 1 },
                                onPress: function () {
                                    function onPress() {
                                        return onCheck(!checked, value);
                                    }

                                    return onPress;
                                }()
                            },
                            _react2["default"].createElement(
                                _reactPrimitives.Text,
                                {
                                    style: [typos.paperFontBody1, styles.label, _config.COLOR[String(theme) + "PrimaryOpacity"], disabled && _config.COLOR[String(theme) + "DisabledOpacity"], {
                                        color: LABEL_COLOR
                                    }]
                                },
                                this.props.label
                            )
                        )
                    )
                );
            }

            return render;
        }()
    }]);

    return Checkbox;
}(_react.Component);

Checkbox.propTypes = {
    label: _react.PropTypes.string,
    theme: _react.PropTypes.oneOf(_config.THEME_NAME),
    primary: _react.PropTypes.oneOfType([_react.PropTypes.oneOf(_config.PRIMARY_COLORS), _react.PropTypes.string]),
    value: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]).isRequired,
    checked: _react.PropTypes.bool,
    disabled: _react.PropTypes.bool,
    onCheck: _react.PropTypes.func
};
Checkbox.defaultProps = {
    theme: 'light',
    primary: _config.PRIMARY,
    disabled: false
};
exports["default"] = Checkbox;


var styles = _reactPrimitives.StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0)'
    },
    label: {
        marginLeft: 16,
        opacity: _config.COLOR.darkPrimaryOpacity.opacity,
        alignItems: 'center',
        flex: 1
    },
    labelContainer: {
        justifyContent: 'center',
        flexDirection: 'row'
    }
});