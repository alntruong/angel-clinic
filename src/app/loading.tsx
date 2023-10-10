export default function Loading() {
  return (
   <div className="flex flex-col items-center justify-center h-screen">
    <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"/>
    <h1 className="absolute">Loading...</h1>
   </div>
  )
}