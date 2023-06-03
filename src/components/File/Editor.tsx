import React from "react";
import CodeEditor, { SelectionText } from "@uiw/react-textarea-code-editor";
function Editor() {
  const textRef = React.useRef();
  const [code, setCode] = React.useState(
    `--js type('table')\n\n  
     SELECT country        as country,
            device_type    as device_type,
            sum(revenue)   as revenue,
            sum(sessions)  as sessions,
            sum(pageviews) as pageviews
    FROM my_table
    where country ="FRANCE"
    GROUP BY 1, 2        
    `
  );
  React.useEffect(() => {
    if (textRef.current) {
      const obj = new SelectionText(textRef.current);
      console.log("obj:", obj);
    }
  }, []);
  return (
    <div>
      {" "}
      <CodeEditor
        value={code}
        // ref={textRef}
        language="js"
        placeholder="Please enter JS code."
        onChange={(evn) => setCode(evn.target.value)}
        padding={15}
        minHeight={290}
        style={{
          fontFamily:
            "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
          fontSize: 12,
          backgroundColor: "#2E3A46",
        }}
      />
    </div>
  );
}

export default Editor;
