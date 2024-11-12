import React from 'react'
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/3 bg-blue-600 text-white p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold">Tushar Tulshiram Wagdare</h1>
              <p className="mt-2 text-xl">Code Enthusiast</p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="mr-2 h-5 w-5" />
                <a href="mailto:tushartwagdare@gmail.com" className="hover:underline">tushartwagdare@gmail.com</a>
              </div>
              <div className="flex items-center">
                <Phone className="mr-2 h-5 w-5" />
                <a href="tel:+917083666972" className="hover:underline">+91 7083666972</a>
              </div>
              <div className="flex items-center">
                <MapPin className="mr-2 h-5 w-5" />
                <p>Murti, Tq-Ghansawangi, Dt-Jalna, 431211</p>
              </div>
              <div className="flex items-center">
                <Github className="mr-2 h-5 w-5" />
                <a href="https://github.com/Tushar-Wagdare/C_Language-" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
              </div>
              <div className="flex items-center">
                <Linkedin className="mr-2 h-5 w-5" />
                <a href="https://www.linkedin.com/in/tushar-wagdare-715438245" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
              </div>
            </div>
          </div>
          <div className="md:w-2/3 p-8">
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Objective</h2>
              <p>Highly motivated software developer with expertise in C, C++, Java, JavaScript, Objective-C, CUDA, OpenCL, and Win32 API. Strong background in graphics programming using OpenGL, OpenGLES, WebGL, and Direct3D11. Seeking to apply my skills in developing high-performance graphics and software solutions in a dynamic and innovative environment.</p>
            </section>
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Skills</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Hard Skills</h3>
                  <ul className="list-disc list-inside">
                    <li>C, C++, Java, JavaScript, Objective-C</li>
                    <li>Graphics Programming: OpenGL, OpenGLES, WebGL, Direct3D11</li>
                    <li>Heterogeneous Parallel Programming: CUDA, OpenCL, Compute shader</li>
                    <li>Win32 API</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Soft Skills</h3>
                  <ul className="list-disc list-inside">
                    <li>Problem-Solving</li>
                    <li>Time Management and Organization</li>
                    <li>Communication</li>
                    <li>Multi-tasking</li>
                  </ul>
                </div>
              </div>
            </section>
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Education</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold">RTR</h3>
                  <p>Currently learning Native Graphics Programming</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">BE - Mechanical Engineering</h3>
                  <p>D.Y. Patil Institute Of Engineering And Technology, Ambi</p>
                  <p>Completed in 2022 with Grade-point 7.98 out of 10</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">12th</h3>
                  <p>Deogiri College Aurangabad</p>
                  <p>Completed in 2018 with 65%</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">10th</h3>
                  <p>S.P. High School Murti</p>
                  <p>Completed in 2016 with 80%</p>
                </div>
              </div>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-4">Academic Project</h2>
              <div>
                <h3 className="text-lg font-semibold">Ergo Comfy Sheet Handling Trolley (2021-2022)</h3>
                <p><strong>Key Responsibilities:</strong> Make Ansys Geometry, Analyze Total Deformation on the Sheet handling Trolley, Analyze Equivalent Stress On The Sheet Handling Trolley.</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}