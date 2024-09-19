export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <form id="wd-text-fields">
                <label htmlFor="wd-name">Assignment Name</label><br />
                <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
                <textarea id="wd-description" cols={30} rows={5}>
                    The assignment is available online Submit a link to the landing page of our own web application 
                    running in Netlify. 
                </textarea>
                <br />
                <table>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input id="wd-points" value={100} />
                    </td>
                </tr>

                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-group">Assignment Group</label>
                    </td>
                    <td>
                        <select id="wd-group">
                        <option selected value="ASSIGNMENTS">ASSIGNMENTS</option>
                        <option value="QUIZ">QUIZ</option>
                        <option value="LABS">LABS</option>
                        </select>
                    </td>
                </tr>
                
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-display-grade-as">Display Grade As</label>
                    </td>
                    <td>
                        <select id="wd-display-grade-as">
                        <option selected value="PERCENTAGE">PERCENTAGE</option>
                        <option value="GRADE">GRADE</option>
                        <option value="GPA">GPA</option>
                        </select>
                    </td>
                </tr>

                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-submission-type">Submission Type</label>
                    </td>
                    <td>
                        <select id="wd-submission-type">
                        <option selected value="ONLINE">ONLINE</option>
                        <option value="IN PERSON">IN PERSON</option>
                        </select>
                    </td>
                </tr>

                <tr>
                    <td></td>
                    <td align="left" valign="top">
                        <label htmlFor="wd-online-entry-options">Online Entry Options</label> <br/>
                        
                        <input type="checkbox" name="check-online-entry-options" id="wd-text-entry"/>
                        <label htmlFor="wd-text-entry">Text Entry</label><br/>

                        <input type="checkbox" name="check-online-entry-options" id="wd-website-url"/>
                        <label htmlFor="wd-website-url">Website URL</label><br/>

                        <input type="checkbox" name="check-online-entry-options" id="wd-media-recordings"/>
                        <label htmlFor="wd-media-recordings">Media Recordings</label><br/>

                        <input type="checkbox" name="check-online-entry-options" id="wd-student-annotation"/>
                        <label htmlFor="wd-student-annotation">Student Annotation</label><br/>

                        <input type="checkbox" name="check-online-entry-options" id="wd-file-upload"/>
                        <label htmlFor="wd-file-upload">File Uploads</label><br/>
                    </td>
                </tr>

                <tr>
                    <td align="right" valign="top">Assign</td>
                    <td align="left" valign="top">
                        <label htmlFor="wd-assign-to">Assign To</label> <br/>
                        <input id="wd-assign-to" value="Everyone" /> <br/><br/>

                        <label htmlFor="wd-due-date">Due</label> <br/>
                        <input type="date" id="wd-due-date" value="2023-05-13" /><br/><br/>
                        
                        <table>
                            <tr>
                                <td>
                                    <label htmlFor="wd-available-from">Available From</label> <br/>
                                    <input type="date" id="wd-available-from" value="2023-05-06" /><br/><br/>
                                </td>
                                <td>
                                    <label htmlFor="wd-available-until">Until</label> <br/>
                                    <input type="date" id="wd-available-until" value="2023-05-20" /><br/><br/>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>

                <tr>
                    <td></td>
                    <td align="right">
                        <button id="wd-submit" type="button"> Cancel </button>
                        <button id="wd-submit" type="submit"> Save </button>
                    </td>
                </tr>

                </table>
                
            </form>
        </div>
);}
