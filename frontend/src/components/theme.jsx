
function ThemeItem({ dataTheme, selected, ...props }) {

const { theme, setTheme } = useTheme();
return (
  <div>
    <h4 className="mb-4">Current Theme: {theme}</h4>
    <div className="flex flex-wrap gap-4">
      {DEFAULT_THEMES.map((t, i) => (
        <ThemeItem
          key={`theme_${t}_#${i}`}
          dataTheme={t}
          role="button"
          aria-label="Theme select"
          aria-pressed={t === theme}
          selected={t === theme}
          tabIndex={0}
          onClick={() => {
            document
              .getElementsByTagName("html")[0]
              .setAttribute("data-theme", t);
            window.localStorage.setItem("sb-react-daisyui-preview-theme", t);
            setTheme(t);
          }}
        />
      ))}
    </div>
  </div>
);
}
export default ThemeItem;