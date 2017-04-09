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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Subheader = function (_Component) {
    _inherits(Subheader, _Component);

    function Subheader() {
        _classCallCheck(this, Subheader);

        return _possibleConstructorReturn(this, (Subheader.__proto__ || Object.getPrototypeOf(Subheader)).apply(this, arguments));
    }

    _createClass(Subheader, [{
        key: "render",
        value: function () {
            function render() {
                var _props = this.props,
                    text = _props.text,
                    color = _props.color,
                    inset = _props.inset,
                    lines = _props.lines;


                return _react2["default"].createElement(
                    _reactPrimitives.View,
                    {
                        style: [styles.container, {
                            paddingLeft: inset ? 72 : 16
                        }]
                    },
                    _react2["default"].createElement(
                        _reactPrimitives.Text,
                        {
                            numberOfLines: lines,
                            style: [styles.text, {
                                color: (0, _helpers.getColor)(color),
                                fontWeight: '500'
                            }]
                        },
                        text
                    )
                );
            }

            return render;
        }()
    }]);

    return Subheader;
}(_react.Component);

Subheader.propTypes = {
    text: _react.PropTypes.string.isRequired,
    color: _react.PropTypes.string,
    inset: _react.PropTypes.bool,
    theme: _react.PropTypes.oneOf(_config.THEME_NAME),
    lines: _react.PropTypes.number
};
Subheader.defaultProps = {
    color: 'rgba(0,0,0,.54)',
    inset: false,
    theme: 'light',
    lines: 1
};
exports["default"] = Subheader;


var styles = _reactPrimitives.StyleSheet.create({
    container: {
        padding: 16
    },
    text: _config.TYPO.paperFontBody1
});