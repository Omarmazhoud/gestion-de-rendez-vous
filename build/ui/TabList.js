"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TabList = TabList;
exports.isTabList = isTabList;
const react_native_1 = require("react-native");
const common_1 = require("./common");
/**
 * Wrapper component for `TabTriggers`. `TabTriggers` within the `TabList` define the tabs.
 *
 * @example
 * ```tsx
 * <Tabs>
 *  <TabSlot />
 *  <TabList>
 *   <TabTrigger name="home" href="/" />
 *  </TabList>
 * </Tabs>
 * ```
 */
function TabList({ asChild, style, ...props }) {
    const Comp = asChild ? common_1.ViewSlot : react_native_1.View;
    return <Comp style={[styles.tabList, style]} {...props}/>;
}
/**
 * @hidden
 */
function isTabList(child) {
    return child.type === TabList;
}
const styles = react_native_1.StyleSheet.create({
    tabList: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    tabTrigger: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});
//# sourceMappingURL=TabList.js.map