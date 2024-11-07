import React from 'react'
import Link from 'next/link'
function layout({children}:{children:React.ReactNode}) {
  return (
    <div>
      {children}
      <Link href="/login">login</Link><br />
       <Link href="/signup">signup</Link>
    </div>
  )
}

export default layout