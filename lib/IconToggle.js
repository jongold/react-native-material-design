Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

require("react-native");

var _reactPrimitives = require("react-primitives");

var _helpers = require("./helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IconToggle = function (_Component) {
    _inherits(IconToggle, _Component);

    function IconToggle(props) {
        _classCallCheck(this, IconToggle);

        var _this = _possibleConstructorReturn(this, (IconToggle.__proto__ || Object.getPrototypeOf(IconToggle)).call(this, props));

        _this.setSize = function (event) {
            var _event$nativeEvent$la = event.nativeEvent.layout,
                width = _event$nativeEvent$la.width,
                height = _event$nativeEvent$la.height;


            _this.setState({
                size: width > height ? width : height
            });
        };

        _this._highlight = function () {
            if (!_this.props.disabled) {
                _reactPrimitives.Animated.timing(_this.state.scaleValue, {
                    toValue: 1,
                    duration: 150
                }).start();
                _reactPrimitives.Animated.timing(_this.state.opacityValue, {
                    toValue: _this.state.maxOpacity,
                    duration: 100
                }).start();
            }
        };

        _this._unHighlight = function () {
            if (!_this.props.disabled) {
                _reactPrimitives.Animated.timing(_this.state.scaleValue, {
                    toValue: 0.01,
                    duration: 1500
                }).start();
                _reactPrimitives.Animated.timing(_this.state.opacityValue, {
                    toValue: 0
                }).start();
            }
        };

        _this._animateBadgeCounter = function () {
            if (_this.badgeAnim && _this.props.badge && _this.props.badge.animate !== false) {
                _reactPrimitives.Animated.spring(_this.badgeAnim, {
                    toValue: 0, // Returns to the start
                    velocity: 8, // Velocity makes it move
                    tension: -5, // Slow
                    friction: 1, // Oscillate a lot
                    duration: 300
                }).start();
            }
        };

        _this._setMainRef = function (ref) {
            _this.main = ref;
        };

        _this._handleResponderEnd = function () {
            var _this$props = _this.props,
                disabled = _this$props.disabled,
                onPress = _this$props.onPress;


            if (!disabled) {
                _this._unHighlight();
                onPress && onPress();
            }
        };

        _this.measure = function () {
            var _this$main;

            return (_this$main = _this.main).measure.apply(_this$main, arguments);
        };

        _this.measureInWindow = function () {
            var _this$main2;

            return (_this$main2 = _this.main).measureInWindow.apply(_this$main2, arguments);
        };

        _this.measureLayout = function () {
            var _this$main3;

            return (_this$main3 = _this.main).measureLayout.apply(_this$main3, arguments);
        };

        _this.state = {
            scaleValue: new _reactPrimitives.Animated.Value(0.01),
            opacityValue: new _reactPrimitives.Animated.Value(0.1),
            maxOpacity: props.opacity,
            size: null
        };
        _this._responder = {
            onStartShouldSetResponder: function () {
                function onStartShouldSetResponder(e) {
                    return true;
                }

                return onStartShouldSetResponder;
            }(),
            onResponderGrant: _this._highlight,
            onResponderRelease: _this._handleResponderEnd,
            onResponderTerminate: _this._unHighlight
        };
        return _this;
    }

    _createClass(IconToggle, [{
        key: "componentDidUpdate",
        value: function () {
            function componentDidUpdate(prevProps) {
                if (this.props && this.props.badge) {
                    if (prevProps.badge && this.props.badge.value !== prevProps.badge.value) {
                        this._animateBadgeCounter();
                    }
                }
            }

            return componentDidUpdate;
        }()
    }, {
        key: "render",
        value: function () {
            function render() {
                var _this2 = this;

                var _state = this.state,
                    scaleValue = _state.scaleValue,
                    opacityValue = _state.opacityValue,
                    size = _state.size;
                var _props = this.props,
                    color = _props.color,
                    onLayout = _props.onLayout,
                    children = _props.children;
                var badge = this.props.badge;
                var percent = this.props.percent;


                if (percent < 0) {
                    percent = 0;
                }
                if (percent > 100) {
                    percent = 100;
                }

                percent = percent / 100;

                if (badge && typeof badge.value === 'number') {
                    badge = Object.assign({}, { value: badge.value }, badge.backgroundColor ? { backgroundColor: badge.backgroundColor } : { backgroundColor: 'paperRed' }, badge.textColor ? { textColor: badge.textColor } : { textColor: '#ffffff' });
                }

                this.badgeAnim = this.badgeAnim || new _reactPrimitives.Animated.Value(0);

                return _react2["default"].createElement(
                    _reactPrimitives.View,
                    _extends({}, this._responder, { onLayout: onLayout }),
                    _react2["default"].createElement(
                        _reactPrimitives.View,
                        null,
                        size && _react2["default"].createElement(_reactPrimitives.Animated.View, {
                            style: [{
                                position: 'absolute',
                                left: (1 - percent) * size / 2,
                                top: (1 - percent) * size / 2,
                                width: percent * size,
                                height: percent * size,
                                borderRadius: percent * size / 2,
                                transform: [{ scale: scaleValue }],
                                opacity: opacityValue,
                                backgroundColor: (0, _helpers.getColor)(color)
                            }]
                        }),
                        _react2["default"].createElement(
                            _reactPrimitives.View,
                            { style: { backgroundColor: 'transparent' }, ref: this._setMainRef, onLayout: function () {
                                    function onLayout(event) {
                                        _this2.setSize(event);
                                    }

                                    return onLayout;
                                }() },
                            children
                        ),
                        size && badge && typeof badge.value === 'number' && _react2["default"].createElement(
                            _reactPrimitives.Animated.View,
                            { style: [styles.badgeContainer, {
                                    backgroundColor: (0, _helpers.getColor)(badge.backgroundColor),
                                    top: size / 10,
                                    right: size / 10,
                                    transform: [// Array order matters
                                    { scale: this.badgeAnim.interpolate({
                                            inputRange: [0, 1],
                                            outputRange: [1, 1.25]
                                        }) }, { translateX: this.badgeAnim.interpolate({
                                            inputRange: [0, 1],
                                            outputRange: [0, -6]
                                        }) }, { translateY: this.badgeAnim.interpolate({
                                            inputRange: [0, 1],
                                            outputRange: [0, 5]
                                        }) }, { rotate: this.badgeAnim.interpolate({
                                            inputRange: [0, 1],
                                            outputRange: ['0deg', '45deg' // 'deg' or 'rad'
                                            ]
                                        }) }] }]
                            },
                            _react2["default"].createElement(
                                _reactPrimitives.View,
                                { style: { flex: 1, justifyContent: 'center' } },
                                _react2["default"].createElement(
                                    _reactPrimitives.Text,
                                    { style: [styles.badgeText, { color: (0, _helpers.getColor)(badge.textColor) }, badge.value > 99 ? { fontSize: 8 } : { fontSize: 10 }] },
                                    badge.value
                                )
                            )
                        )
                    )
                );
            }

            return render;
        }()

        /**
         *
         * @private
         */


        /**
         *
         * @private
         */


        /**
         *
         * @private
         */


        /**
         *
         * @private
         */


        /**
         *
         * @private
         */


        // Proxy the measurement methods from the main view

    }]);

    return IconToggle;
}(_react.Component);

IconToggle.propTypes = {
    color: _react.PropTypes.string.isRequired,
    opacity: _react.PropTypes.number,
    disabled: _react.PropTypes.bool,
    onPress: _react.PropTypes.func,
    percent: _react.PropTypes.number,
    children: _react.PropTypes.element.isRequired,
    badge: _react.PropTypes.shape({
        value: _react.PropTypes.number,
        animate: _react.PropTypes.bool,
        backgroundColor: _react.PropTypes.string,
        textColor: _react.PropTypes.string
    }),
    onLayout: _react.PropTypes.func
};
IconToggle.defaultProps = {
    opacity: .1,
    disabled: false,
    percent: 90
};
exports["default"] = IconToggle;


var styles = {
    badgeContainer: {
        position: 'absolute',
        borderRadius: 7.5,
        width: 15,
        height: 15
    },
    badgeText: {
        textAlign: 'center'
    }
};