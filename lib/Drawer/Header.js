Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

require("react-native");

var _reactPrimitives = require("react-primitives");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
    _inherits(Header, _Component);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: "render",
        value: function () {
            function render() {
                var _props = this.props,
                    image = _props.image,
                    height = _props.height,
                    backgroundColor = _props.backgroundColor,
                    children = _props.children;


                if (image) {
                    return _react2["default"].cloneElement(image, {
                        style: [styles.header, { height: height }]
                    }, children);
                }

                return _react2["default"].createElement(
                    _reactPrimitives.View,
                    { style: [styles.header, { height: height, backgroundColor: backgroundColor }] },
                    children
                );
            }

            return render;
        }()
    }]);

    return Header;
}(_react.Component);

Header.propTypes = {
    image: _react.PropTypes.shape({ type: _react.PropTypes.oneOf([_reactPrimitives.Image]) }),
    backgroundColor: _react.PropTypes.string,
    height: _react.PropTypes.number,
    children: _react.PropTypes.node
};
Header.defaultProps = {
    height: 150,
    backgroundColor: '#333333'
};
exports["default"] = Header;


var styles = {
    header: {
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        paddingHorizontal: 16,
        marginBottom: 8
    }
};