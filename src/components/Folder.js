import React, { useState } from "react";

function Folder({ data, nodeKey, childKey, onNodeClick }) {
  const [selectedNode, setSelectedNode] = useState(null);

  const isNode = (item) => item.type === nodeKey;
  const hasChildren = (item) => item[childKey] && selectedNode === item.id;

  function handleNodeClick(item) {
    if (item.id === selectedNode) {
      setSelectedNode(null);
      if (onNodeClick) onNodeClick(null);
      return;
    }
    if (item.type === nodeKey) {
      setSelectedNode(item.id);
      if (onNodeClick) onNodeClick(item);
    }
  }

  function getHeadClass(item) {
    return `folder-head  ${isNode(item) ? "folder-node" : "folder-child"} ${
      item.id === selectedNode ? "selected" : ""
    }`;
  }

  return (
    <div className='folder-container p-3'>
      {data &&
        data.map((item) => (
          <div key={item.id} className='folder'>
            <div
              onClick={() => handleNodeClick(item)}
              className={getHeadClass(item)}
            >
              <div className='folder-icon'>
                {isNode(item) ? (
                  <FolderCloseIcon type={item[childKey] ? "close" : "empty"} />
                ) : (
                  <FileIcon />
                )}
              </div>
              <label className='folder-label'>{item.title}</label>
              <div className='folder-icon folder-icon-right'>
                {isNode(item) && item[childKey] ? <RightIcon /> : null}
              </div>
            </div>
            {hasChildren(item) && (
              <div className='folder-children'>
                <Folder
                  data={item[childKey]}
                  nodeKey={nodeKey}
                  childKey={childKey}
                  onNodeClick={onNodeClick}
                />
              </div>
            )}
          </div>
        ))}
    </div>
  );
}

export default Folder;

function FolderCloseIcon({ type = "close" }) {
  const color = {
    close: {
      fill1: "#ffa000",
      fill2: "#ffca28",
    },
    empty: {
      fill1: "#666666",
      fill2: "#CCCCCC",
    },
  };
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      x='0px'
      y='0px'
      width='48'
      height='48'
      viewBox='0 0 172 172'
      style={{ fill: "#000000" }}
    >
      <g
        fill='none'
        fillRule='nonzero'
        stroke='none'
        strokeWidth='1'
        strokeLinecap='butt'
        strokeLinejoin='miter'
        strokeMiterlimit='10'
        strokeDasharray=''
        strokeDashoffset='0'
        fontFamily='none'
        fontWeight='none'
        fontSize='none'
        textAnchor='none'
        style={{ mixBlendMode: "normal" }}
      >
        <path d='M0,172v-172h172v172z' fill='none'></path>
        <g>
          <path
            d='M143.33333,43h-64.5l-14.33333,-14.33333h-35.83333c-7.88333,0 -14.33333,6.45 -14.33333,14.33333v28.66667h143.33333v-14.33333c0,-7.88333 -6.45,-14.33333 -14.33333,-14.33333z'
            fill={color[type].fill1}
          ></path>
          <path
            d='M143.33333,43h-114.66667c-7.88333,0 -14.33333,6.45 -14.33333,14.33333v71.66667c0,7.88333 6.45,14.33333 14.33333,14.33333h114.66667c7.88333,0 14.33333,-6.45 14.33333,-14.33333v-71.66667c0,-7.88333 -6.45,-14.33333 -14.33333,-14.33333z'
            fill={color[type].fill2}
          ></path>
        </g>
      </g>
    </svg>
  );
}

function RightIcon() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      x='0px'
      y='0px'
      width='24'
      height='24'
      viewBox='0 0 172 172'
      style={{ fill: "#000000" }}
    >
      <g
        fill='none'
        fillRule='nonzero'
        stroke='none'
        strokeWidth='1'
        strokeLinecap='butt'
        strokeLinejoin='miter'
        strokeMiterlimit='10'
        strokeDasharray=''
        strokeDashoffset='0'
        fontFamily='none'
        fontWeight='none'
        fontSize='none'
        textAnchor='none'
        style={{ mixBlendMode: "normal" }}
      >
        <path d='M0,172v-172h172v172z' fill='none'></path>
        <g fill='#cccccc'>
          <path d='M142.23123,83.41284l-86,-82.41447c-1.41374,-1.35071 -3.63933,-1.32972 -5.01457,0.05599l-21.5,21.49943c-0.68587,0.68585 -1.0638,1.61665 -1.0498,2.58245c0.014,0.97279 0.41992,1.8896 1.12329,2.55446l61.74251,58.3116l-61.74251,58.3116c-0.70337,0.66486 -1.10929,1.58166 -1.12329,2.55446c-0.014,0.96579 0.36393,1.89659 1.0498,2.58245l21.5,21.49943c0.69987,0.69986 1.6167,1.04978 2.53353,1.04978c0.89233,0 1.78467,-0.32892 2.48104,-0.99379l86,-82.41447c0.70337,-0.67886 1.10229,-1.60966 1.10229,-2.58945c0,-0.97979 -0.39892,-1.9106 -1.10229,-2.58945z'></path>
        </g>
      </g>
    </svg>
  );
}

function FileIcon() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      x='0px'
      y='0px'
      width='48'
      height='48'
      viewBox='0 0 172 172'
      style={{ fill: "#000000" }}
    >
      <g
        fill='none'
        fillRule='nonzero'
        stroke='none'
        strokeWidth='1'
        strokeLinecap='butt'
        strokeLinejoin='miter'
        strokeMiterlimit='10'
        strokeDasharray=''
        strokeDashoffset='0'
        fontFamily='none'
        fontWeight='none'
        fontSize='none'
        textAnchor='none'
        style={{ mixBlendMode: "normal" }}
      >
        <path d='M0,172v-172h172v172z' fill='none'></path>
        <g>
          <path
            d='M143.33333,161.25h-114.66667v-150.5h78.83333l35.83333,35.83333z'
            fill='#90caf9'
          ></path>
          <path
            d='M137.95833,50.16667h-34.04167v-34.04167z'
            fill='#e1f5fe'
          ></path>
        </g>
      </g>
    </svg>
  );
}
