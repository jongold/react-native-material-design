Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

require("react-native");

var _reactPrimitives = require("react-primitives");

var _Icon = require("./Icon");

var _Icon2 = _interopRequireDefault(_Icon);

var _helpers = require("./helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Avatar = function (_Component) {
    _inherits(Avatar, _Component);

    function Avatar() {
        _classCallCheck(this, Avatar);

        return _possibleConstructorReturn(this, (Avatar.__proto__ || Object.getPrototypeOf(Avatar)).apply(this, arguments));
    }

    _createClass(Avatar, [{
        key: "render",
        value: function () {
            function render() {
                var _props = this.props,
                    image = _props.image,
                    icon = _props.icon,
                    size = _props.size,
                    color = _props.color,
                    backgroundColor = _props.backgroundColor,
                    text = _props.text,
                    borderRadius = _props.borderRadius,
                    borderColor = _props.borderColor,
                    borderWidth = _props.borderWidth;


                if (image) {
                    return _react2["default"].cloneElement(image, {
                        style: {
                            width: size,
                            height: size,
                            borderRadius: borderRadius,
                            borderColor: borderColor,
                            borderWidth: borderWidth
                        }
                    });
                }

                if (icon) {
                    return _react2["default"].createElement(
                        _reactPrimitives.View,
                        { style: { flex: 1 } },
                        _react2["default"].createElement(
                            _reactPrimitives.View,
                            { style: { width: size, height: size, borderRadius: borderRadius, backgroundColor: (0, _helpers.getColor)(backgroundColor), alignItems: 'center', justifyContent: 'center' } },
                            _react2["default"].createElement(_Icon2["default"], {
                                name: icon,
                                color: (0, _helpers.getColor)(color),
                                size: 0.6 * size
                            })
                        )
                    );
                }

                if (text) {
                    return _react2["default"].createElement(
                        _reactPrimitives.View,
                        { style: { flex: 1 } },
                        _react2["default"].createElement(
                            _reactPrimitives.View,
                            { style: { width: size, height: size, borderRadius: borderRadius, backgroundColor: (0, _helpers.getColor)(backgroundColor), alignItems: 'center', justifyContent: 'center' } },
                            _react2["default"].createElement(
                                _reactPrimitives.Text,
                                { style: { color: (0, _helpers.getColor)(color) } },
                                text
                            )
                        )
                    );
                }

                return null;
            }

            return render;
        }()
    }]);

    return Avatar;
}(_react.Component);

Avatar.propTypes = {
    image: _react.PropTypes.shape({ type: _react.PropTypes.oneOf([_reactPrimitives.Image]) }),
    icon: _react.PropTypes.string,
    size: _react.PropTypes.number,
    color: _react.PropTypes.string,
    backgroundColor: _react.PropTypes.string,
    text: _react.PropTypes.string,
    borderRadius: _react.PropTypes.number,
    borderColor: _react.PropTypes.string,
    borderWidth: _react.PropTypes.number
};
Avatar.defaultProps = {
    size: 40,
    color: '#ffffff',
    backgroundColor: (0, _helpers.getColor)('paperGrey500'),
    borderRadius: 40 / 2,
    borderColor: 'rgba(0,0,0,.1)',
    borderWidth: 1
};
exports["default"] = Avatar;