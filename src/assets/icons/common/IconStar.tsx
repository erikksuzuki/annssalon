const IconStar = ({ className = 'w-5 h-5' }: { className?: string }) => {
  return (
    <svg
      width="800px"
      height="800px"
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g fill="currentColor">
        <path d="M24,3a2.1,2.1,0,0,0-1.8,1.1L16.5,15.7,3.7,17.5A2.1,2.1,0,0,0,2.6,21l9.2,8.9L9.7,42.7A2,2,0,0,0,11.6,45l1-.2,11.4-6,11.4,6,1,.2a2,2,0,0,0,1.9-2.3L36.2,29.9,45.4,21a2.1,2.1,0,0,0-1.1-3.5L31.5,15.7,25.8,4.1A2.1,2.1,0,0,0,24,3Z" />
      </g>
    </svg>
  )
}

export default IconStar
