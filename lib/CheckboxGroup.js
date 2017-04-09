Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

require("react-native");

var _reactPrimitives = require("react-primitives");

var _Checkbox = require("./Checkbox");

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _config = require("./config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CheckboxGroup = function (_Component) {
    _inherits(CheckboxGroup, _Component);

    function CheckboxGroup(props) {
        _classCallCheck(this, CheckboxGroup);

        var _this = _possibleConstructorReturn(this, (CheckboxGroup.__proto__ || Object.getPrototypeOf(CheckboxGroup)).call(this, props));

        _this.componentWillMount = function () {
            var checked = _this.props.checked;


            if (checked && checked.length) {
                _this.value = checked;
            }
        };

        _this._onChange = function (checked, value) {
            var selected = _this.state.selected;


            var newSelected;
            if (checked) {
                newSelected = [].concat(_toConsumableArray(selected), [value]);
            } else {
                var index = selected.indexOf(value);
                newSelected = [].concat(_toConsumableArray(selected.slice(0, index)), _toConsumableArray(selected.slice(index + 1)));
            }

            _this.setState({
                selected: newSelected
            });

            var onSelect = _this.props.onSelect;

            onSelect && onSelect(newSelected);
        };

        _this.state = {
            selected: []
        };
        return _this;
    }

    _createClass(CheckboxGroup, [{
        key: "render",
        value: function () {
            function render() {
                var _this2 = this;

                var _props = this.props,
                    items = _props.items,
                    theme = _props.theme,
                    primary = _props.primary;

                return _react2["default"].createElement(
                    _reactPrimitives.View,
                    null,
                    items && items.length && items.map(function (item) {
                        var value = item.value;

                        return _react2["default"].createElement(_Checkbox2["default"], _extends({
                            ref: value,
                            key: "Checkbox" + String(value),
                            value: value,
                            theme: theme,
                            primary: primary,
                            onCheck: _this2._onChange,
                            checked: _this2.state.selected && _this2.state.selected.indexOf(value) !== -1
                        }, item));
                    })
                );
            }

            return render;
        }()
    }, {
        key: "value",


        /**
         * Get the value of checked Checkbox in CheckboxGroup. Often use in form.
         * @returns {Array}
         */
        get: function () {
            function get() {
                return this.state.selected;
            }

            return get;
        }()

        /**
         * Make CheckboxGroup set some checkbox checked
         * @param {string[]} value - An array of values of some Checkbox in　CheckboxGroup
         */
        ,
        set: function () {
            function set(value) {
                this.setState({
                    selected: value
                });

                var onSelect = this.props.onSelect;

                onSelect && onSelect(value);
            }

            return set;
        }()
    }]);

    return CheckboxGroup;
}(_react.Component);

CheckboxGroup.propTypes = {
    theme: _react.PropTypes.oneOf(_config.THEME_NAME),
    primary: _react.PropTypes.oneOf(_config.PRIMARY_COLORS),
    onSelect: _react.PropTypes.func,
    checked: _react.PropTypes.array,
    items: _react.PropTypes.arrayOf(_react.PropTypes.shape({
        value: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]).isRequired,
        label: _react.PropTypes.string,
        disabled: _react.PropTypes.bool
    }))
};
CheckboxGroup.defaultProps = {
    theme: 'light',
    primary: _config.PRIMARY
};
exports["default"] = CheckboxGroup;